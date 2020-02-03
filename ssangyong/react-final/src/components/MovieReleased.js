import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class MovieReleased extends Component{
    // 변수 선언
    constructor(props)
    {
        super(props);
        this.state={
            movie_data:[],
            page:1,
            totalpage:0
        }
    }
    componentWillMount() {
        var _this=this;
        // /movie_release?page=1
        axios.get('http://localhost:3355/movie_release',{
            params:{
                page:_this.page
            }
        }).then(function(response){
            _this.setState({movie_data:response.data})
        })
    }

    render(){
        const html=this.state.movie_data.map((m)=>
            <div className="col-sm-3">
                <div className="thumbnail">
                    <NavLink to={"/detail/"+m.mno}><img src={m.poster} alt="Paris" width="400" height="300"/></NavLink>
                    <p><strong>{m.director}</strong></p>
                    <p>{m.title}</p>
                </div>
            </div>
        );
        return (
            <div className="container-fluid text-center bg-grey">
                <h2>현재 상영 영화</h2>
                <div className="row text-center">
                    {html}
                </div>
             </div>

        )
    }
}
export default MovieReleased;