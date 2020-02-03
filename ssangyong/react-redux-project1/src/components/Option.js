import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.props.onChange(e.target.value)//App가 갖고 있는 이벤트 함수 호출 
    }

    render() {
        return (
            <input type="text" className="input=sm" onChange={this.onChange} value={this.props.diff} />
        );
    }
}

export default Option;