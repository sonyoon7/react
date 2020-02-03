import React, { Component } from 'react';
import axios from 'axios';
//index.js => <BoxOffice name="HONG"/>

class Movie extends Component {
    // defualt 값에 constructor, componentWillMount.. 다 세팅 되어 있지만 상속 받은 후 오버라이딩 해야 할 경우 재정의 한다.
    constructor(props) {
        super(props);
        // 변경되는 데이터 받기 state *props불변값은 굳이 constructor 필요하지 않음 
        // refs? 참조해서 ...
        this.state = {
            movie: [],

        }

    }
    componentWillMount() {
        //데이터 가져와서 state movie에 저장
        /* 

        axios객체는 아래와 같이 간단하게 HTTP요청을 할 수 있
        axios({
            url: 'https://test/api/cafe/list/today',
            method: 'get',
            data: {
            foo: 'diary'
            }
        });
        */


        /* 
            this?

            class A{
                =>A:this
                B b= new B(){
                    B: this
                }
            }
        
        */
        var _this = this; //BoxOffice의 this이다
        axios.get("http://localhost:3000/movie.json")
            .then(function (result) {
                console.log(result);
                _this.setState({ movie: result.data });//this가 BoxOffice 거를 가져와야되는디 axios라 에러 났음
            })


    }
    /* 
      "actor": "가엘 가르시아 베르날 , 앤서니 곤잘레스 , 벤자민 브랫",
    "director": "리 언크리치",
    "grade": "전체",
    "title": "코코",
    "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80397/80397_185.jpg",
    "mno": 1,
    "story":
    
    */
    render() {
        const html = this.state.movie.map((m) => (
            <tr>
                <td>{m.actor}</td>
                <td>{m.director}</td>
                <td>{m.grade}</td>
                <td>{m.title}</td>
                <td><img src={m.poster} /></td>
                <td>{m.story}</td>
            </tr>
        ));
        // 저장된 데이터를 화면에 출력하기 
        return (
            <div>
                <table className={"table table-bordered"}>
                    <thead>
                        <tr className="success">
                            <th>actor</th>
                            <th>director</th>
                            <th>grade</th>
                            <th>title</th>
                            <th>poster</th>
                            <th>story</th>
                        </tr>
                    </thead>
                    <tbody>
                        {html}
                    </tbody>
                </table>
            </div>
        );
    }
    componentDidMount() {

    }
}


export default Movie;