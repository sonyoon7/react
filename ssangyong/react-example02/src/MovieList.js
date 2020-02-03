import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
  /* 
     1. 변수 => Node.js에 넘겨준 데이터를 저장 => state 
       => props : 속성값 <MovieList list =""/>
       => state : 변경이 가능, 서버에서 들어오는 데이터 처리
       => refs : input, select... 태그 관리 이벤트 처리시 어떤 버튼 눌렸는지 등등 
      
  */
  constructor(props) {
    super(props)
    //변수 선언
    this.state = {
      movie: [],
      page: 1,
      // date: '',
      // detail: {}
    }
    // 이벤트 등록
    this.prevHandler = this.prevHandler.bind(this);//권장 사항 
    this.nextHandler = this.nextHandler.bind(this);
    /* 
      constructor() => componentWillMount()=> render()=> componentDidMount()
                                          =>setState()=>render()
    */
  }
  prevHandler() {
    this.setState({ page: this.state.page > 1 ? this.state.page - 1 : this.state.page })// setState는 render를 자동 호출
    var _this = this;
    axios.get('http://localhost:3355/movie?', {
      //? 뒤에 들어가는 parameter들 집어 넣기
      /* 
        $.ajax({
          type:'get,
          url:'',
          data{page:1}
        })
      */
      params: {
        page: _this.state.page
      }
    })
      .then(function (res) {
        _this.setState({ movie: res.data })
      })

  }
  nextHandler() {
    this.setState({ page: this.state.page < 10 ? this.state.page + 1 : this.state.page })
    var _this = this;
    axios.get('http://localhost:3355/movie?', {
      params: {
        page: _this.state.page
      }
    })
      .then(function (res) {
        _this.setState({ movie: res.data })
      })

  }
  componentWillMount() {
    //데이터 읽기 => state 저장
    var _this = this;
    axios.get('http://localhost:3355/movie?', {
      params: {
        page: _this.state.page
      }
    })
      .then(function (res) {
        _this.setState({ movie: res.data })
      })


  }
  render() {
    // state에 저장된 데이터 출력
    const html = this.state.movie.map((m) => (
      <div class="col-md-3">
        <div class="thumbnail">
          <img src={m.poster} alt="Lights" style={{ "width": "100%" }} />
          <div class="caption">
            <p>{m.title}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div className={"row"}>
        {html}
        <div className="text-center">
          <input type="button" value="이전" className={"btn btn-lg btn-danger"} onClick={this.prevHandler} />
          <input type="button" value="다음" className={"btn btn-lg btn-primary"} onClick={this.nextHandler} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    //jquery, AngularJs, VueJs 연동 => 처리
  }
}

export default MovieList;
