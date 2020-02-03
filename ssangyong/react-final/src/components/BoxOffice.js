import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class BoxOffice extends Component{
    constructor(props) {
        super(props);
        this.state={
            movie_data:[],
            no:1
        }
    }
    loadData(no)
    {
        var _this=this;
        //this.setState({no:no})
        axios.get('http://localhost:3355/movie_boxoffice',{
            params:{
                no:no
            }
        }).then(function(response){
            _this.setState({movie_data:response.data})
        });
    }
    componentWillMount() {
       this.loadData(1);
    }

    render(){
        return (
          <div className="container-fluid text-center bg-grey">
            <h2>박스오피스</h2>
            <div className="row text-center">
             <div className={"text-center"}>
                 <input type={"button"} className={"btn btn-sm btn-primary"} value={"주간"}
                   onClick={this.loadData.bind(this,1)}
                 />
                 <input type={"button"} className={"btn btn-sm btn-success"} value={"월간"}
                        onClick={this.loadData.bind(this,2)}
                 />
                 <input type={"button"} className={"btn btn-sm btn-danger"} value={"연간"}
                        onClick={this.loadData.bind(this,3)}
                 />
             </div>
            </div>

                <BoxOfficeData movie_data={this.state.movie_data}/>

          </div>
        )
    }
}
class BoxOfficeData extends Component{
    render(){
        const html=this.props.movie_data.map((m)=>
            <div className="col-sm-3">
                <div className="thumbnail">
                    <NavLink to={"/detail/"+m.mno}><img src={m.poster} alt="Paris" width="400" height="300"/></NavLink>
                    <p><strong>{m.director}</strong></p>
                    <p>{m.title}</p>
                </div>
            </div>
        );
        return (
            <div className="row text-center">
                {html}
            </div>
        )
    }
}
export default BoxOffice;