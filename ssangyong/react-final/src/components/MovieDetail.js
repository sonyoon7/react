import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom";
class MovieDetail extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            movie_data:{}
        }
    }
    componentWillMount() {
        // {"/detail/"+m.mno}>
        var _this=this;
        axios.get('http://localhost:3355/movie_detail',{
            params:{
                mno:this.props.match.params.mno
            }
        }).then(function (response) {
            _this.setState({movie_data:response.data})
            console.log(response.data)
        })
    }

    render(){
        return (
            <div className="container text-center bg-grey">
                <h2>영화 상세보기</h2>
                <div className="row text-center">
                    <table className={"table"}>
                        <tr>
                            <td>
                                <iframe src={"http://youtube.com/embed/"+this.state.movie_data.key} width={"800"} height={"400"}></iframe>
                            </td>
                        </tr>
                    </table>
                    <table className={"table"}>
                        <tr>
                            <td width={"30%"} rowSpan={"6"} className={"text-center"}>
                                <img src={this.state.movie_data.poster}/>
                            </td>
                            <td colSpan={"2"}>
                                {this.state.movie_data.title}
                            </td>
                        </tr>
                        <tr>
                            <td width={"20%"} className={"text-right"}>감독</td>
                            <td width={"50%"} className={"text-left"}>{this.state.movie_data.director}</td>
                        </tr>
                        <tr>
                            <td width={"20%"} className={"text-right"}>출연</td>
                            <td width={"50%"} className={"text-left"}>{this.state.movie_data.actor}</td>
                        </tr>
                        <tr>
                            <td width={"20%"} className={"text-right"}>장르</td>
                            <td width={"50%"} className={"text-left"}>{this.state.movie_data.genre}</td>
                        </tr>
                        <tr>
                            <td width={"20%"} className={"text-right"}>등급</td>
                            <td width={"50%"} className={"text-left"}>{this.state.movie_data.grade}</td>
                        </tr>
                        <tr>
                            <td width={"20%"} className={"text-right"}>개봉일</td>
                            <td width={"50%"} className={"text-left"}>{this.state.movie_data.regdate}</td>
                        </tr>
                        <tr>
                            <td colSpan={"3"}>
                                {this.state.movie_data.story}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default MovieDetail;