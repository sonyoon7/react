import React, { Component } from 'react';
import { increment } from '../action';
import { decrement } from '../action';

class Button extends Component {
    constructor(props) {
        super(props)
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    onIncrement() {
        this.props.store.dispatch(increment()) //action거쳐서 reducer로 넘어간 후 처리 됨 
    }
    onDecrement() {

        this.props.store.dispatch(decrement())

    }
    render() {

        return (
            <div>
                <button className="btn btn-sm btn-primary" onClick={this.onIncrement}>+</button>
                <button className="btn btn-sm btn-success" onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default Button;