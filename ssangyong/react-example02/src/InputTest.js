import React, { Component } from 'react';

/* 
        function    : 함수형 => 한 개 기능
        class       : 클래스 => 여러개 기능
        =======================================
        브라우저 <script>
        컴포넌트 자체 테스트
*/
class InputTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',

        }
        this.dataChange = this.dataChange.bind(this);
        this.btnChlick = this.btnChlick.bind(this);
    }
    dataChange(e) {
        this.setState({ value: e.target.value });
    }
    btnChlick(e) {
        alert(this.state.value);
    }
    render() {
        return (
            <div>
                입력:<input type="text" size="10" className="input-sm" onChange={this.dataChange} />
                <button type="button" value="전송" className="btn btn-sm btn-success" onClick={this.btnChlick} >전송</button>
                <br />
                <h2>{this.state.value}</h2>
            </div>
        );
    }
}

export default InputTest;