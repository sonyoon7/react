import React, { Component } from 'react';
import { setDiff } from '../action';


// View => 상위에서 데이터, Store에서 데이터 받기 
// store=> action, state


/* 
    Store (acrion 정보, 데이터 sTate)
    => 이벤트 발생 => DISPATCH() => STORE에 전송 => STATE 변경=> this.props.getState().


*/
class Option extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {

        this.props.store.dispatch(setDiff(e.target.value)) //데이터가 변경될 떄 값 보냄
        /* 
                  case SET_DIFF:
                    return Object.assign({}, state, {
                        diff: action.diff
                    })
            }

            이벤트 발생 => onChange
            처리 요청 => dispatch(setdiff(e.target.value))
            setDiff(e.target.value) :action
            redcer => store=> state 변경
            render() +> 환경변겅 
        */
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange}
                    value={this.props.store.getState().counter.diff} />

            </div>
        );
    }
}

export default Option;