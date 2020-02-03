//이것이 Store 임
//combineReducer?

import { INCREMENT, DECREMENT, SET_DIFF } from "../action";
//이벤트 => 사용자 요청 => 요청에 대해 처리하는 부분'
import { combineReducers } from "redux"

/* @Controller */

//state에 대한 초기화
const counterInitialState = {
    //app가 가지고 있는 변수 두개 여기다 가져옴 => app에선 관리하지 않겠다는 이야기
    value: 0,
    diff: 1

}

const counter = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            })
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            })
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            })
        default:
            return state
    }
}

const countApp = combineReducers({
    counter
}//counter 하나가 테이블 처럼 생각하면 편함 
)

export default countApp;