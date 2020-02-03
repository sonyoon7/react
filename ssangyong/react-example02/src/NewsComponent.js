import React, { Component } from 'react';
import axios from 'axios';
class NewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            fd: '영화'//검색어 갱신 될 부분
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.findClick = this.findClick.bind(this);
    }
    //입력한 데이터 저장
    changeHandler(e) {
        this.setState({ fd: e.target.value })
        console.log(this.state.fd);
    }
    //검색 버튼 
    findClick() {
        const _this = this;
        axios.get('http://localhost:3355/news', {
            params: {
                fd: _this.state.fd
            }
        }).then((res) => {
            console.log(res.data)
            _this.setState({ news: res.data })
        })
    }

    //데이터 읽기
    componentWillMount() {
        const _this = this;
        axios.get('http://localhost:3355/news', {
            params: {
                fd: _this.state.fd
            }
        }).then((res) => {
            console.log(res.data)
            _this.setState({ news: res.data })
        })
    }
    render() {
        const html = this.state.news.map((m, idx) => (
            <table className="table table-bordered">
                <tr>
                    <td className="text-left" style={{ "backgroundColor": "#ccccff", "fontWeight": "bold" }}>{m.title}</td>
                    <td className="text-right" >{m.author}</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <a href={m.link} >{m.description}</a>
                    </td>
                </tr>
            </table>
        ));
        return (
            <div className="row" style={{ "width": "800px", "margin": "0px auto" }}>
                <table>
                    <tr>
                        <td>
                            검색:  <input type="text" className="" onChange={this.changeHandler} />
                            <button onClick={this.findClick}>찾기</button>
                        </td>
                    </tr>
                </table>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>{html}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NewsComponent;