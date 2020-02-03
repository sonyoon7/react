import React, { Component } from 'react';

//버튼 이벤트의 따라 액션을 하면 value =state.value+1 됨
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);

    }
    onIncrement(e) {
        this.props.onIncrement();//app가 가지고 있는 함수 호출
    }
    onDecrement(e) {
        this.props.onDecrement();//app가 가지고 있는 함수 호출
    }
    render() {
        // <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        return (
            <div className="row text-center">
                <button className="btn btn=sm btn-primary" onClick={this.onIncrement}>+</button>
                <button className="btn btn=sm btn-danger" onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default Button;