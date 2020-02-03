import React,{Component} from 'react'
import axios from 'axios'
class News extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            news_data:[]
        }
    }
    componentWillMount() {
        var _this=this;
        axios.get('http://localhost:3355/movie_news').then(function(response){
           _this.setState({news_data:response.data})
        });
    }

    render(){
        const html=this.state.news_data.map((m)=>
            <table className={"table"}>
                <tr>
                    <td className={"text-center"} width={"30%"} rowSpan={"3"}>
                        <img src={m.poster} width={"100%"}/>
                    </td>
                    <td className={"text-left"} width={"70%"}>
                        <a href={m.link}>{m.title}</a>
                    </td>
                </tr>
                <tr>
                    <td>{m.content}</td>
                </tr>
                <tr>
                    <td className={"text-right"}>{m.author}</td>
                </tr>
            </table>
        );
        return (
            <div className="container text-center bg-grey">
                <h2>영화 뉴스</h2>
                <div className="row text-center">
                    <table className={"table"}>
                        <tbody>
                         <tr>
                             <td>{html}</td>
                         </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default News;