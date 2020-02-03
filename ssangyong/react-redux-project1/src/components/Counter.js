import React, { Component } from 'react';

//button 액션으로 저장소 변경 시키면
//counter가 저장소로 부터 데이터를 읽어옴

/* 
    1)Action
    2)dispatch
    3)Store
    4)view 

*/

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Value:{this.props.value}</h1>
            </div>
        );
    }
}

export default Counter;