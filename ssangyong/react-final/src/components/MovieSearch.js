import React,{Component} from 'react'
import axios from 'axios'
class MovieSearch extends Component{
    // 변수 선언
    constructor(props)
    {
        super(props);
        this.state={
            ss:'',
            movie_data:[]
        }
        this.handleUserInput=this.handleUserInput.bind(this);
    }
    handleUserInput(ss)
    {
        this.setState({ss:ss});
        console.log("ss="+ss);
    }
    componentWillMount() {
       var _this=this;
       axios.get('http://localhost:3355/movie_find').then(function(response){
           _this.setState({movie_data:response.data})
       })
    }

    render(){
        return (
            <div className="container-fluid text-center bg-grey">
                <h2>영화찾기</h2>
                <div className="row text-center">
                    <SearchBar ss={this.state.ss} onUserInput={this.handleUserInput}/>
                    <MovieTable movie_data={this.state.movie_data} ss={this.state.ss}/>

                </div>
            </div>
        )
    }
}
/*
        movie_data.map(function(m){
             return (
             )
        })
 */
class MovieTable extends Component{
   render() {
       var rows=[];
       // abcded  => ss=k  ==> -1 , ss=b => 1
       this.props.movie_data.map((m)=>{
           if(m.title.indexOf(this.props.ss)==-1)
           {
               return;
           }
           rows.push(<MovieRow movie_data={m} />);
       });
       return (
           <table className={"table"}>
               <thead>
                <th></th>
                <th>영화명</th>
                <th>감독</th>
                <th>출연</th>
                <th>장르</th>
               </thead>
               <tbody>
                {rows}
               </tbody>
           </table>
       )
   }
}
class MovieRow extends Component{
    render() {
        return (
            <tr>
                <td><img src={this.props.movie_data.poster} width={"35"} height={"35"}/>></td>
                <td>{this.props.movie_data.title}</td>
                <td>{this.props.movie_data.director}</td>
                <td>{this.props.movie_data.actor}</td>
                <td>{this.props.movie_data.genre}</td>
            </tr>
        )
    }
}
class SearchBar extends Component{
   constructor(props)
   {
       super(props);
       this.handleChange=this.handleChange.bind(this);
   }
   handleChange(e)
   {
       this.props.onUserInput(e.target.value);
   }
   render() {
       return (
           <form>
           <input type={"text"} className={"input-sm"} placeholder={"Search"}
                  value={this.props.ss}
                  onChange={this.handleChange} size={"30"}/>
           </form>

       )
   }
}
export default MovieSearch;