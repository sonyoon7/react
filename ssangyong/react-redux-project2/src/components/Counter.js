import React, { Component } from 'react';

// import from '';
class Counter extends Component {

    render() {
        return (
            <div>
                {/* getState 는 스토어 안에 들어있는 함수 */}
                <h1>{this.props.store.getState().counter.value}</h1>
            </div>
        );
    }
}

export default Counter;