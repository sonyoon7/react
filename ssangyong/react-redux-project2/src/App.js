import React, { Component } from 'react';
import Counter from './components/Counter';
import Option from './components/Option';
import Button from './components/Button';

/* 
  리액트 : 화면 UI 라이브러리
  리덕스 : 데이터(state, action) 관리 라이브러리
  ==> 화면(데이터)

  용어 
  -------------------------------------
  Store     : 컴포넌트가 사용 할 데이터 내장 (state)
  Action    : 데이터를 변경할 때 참조하는 객체  
  Dispatch  : 액션을 스토어에 전달하는 역할
  Reducer   : 데이터 실제 변경 
  Subscribe : 스토어에 존재하는 값을 컴포넌트가 읽어 간다


  순서
  -----------------------------'
  component 가 이벤트 발생
   => reducer (state 값을 갱신)
   => this.props.store.dispatch(onIncremnet())
   => 변경된 값을 넘겨준다 
      store.subscribe(render())

*/

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={this.props.store} />
        <Option store={this.props.store} />
        <Button store={this.props.store} />
      </div>
    );
  }
}

export default App;