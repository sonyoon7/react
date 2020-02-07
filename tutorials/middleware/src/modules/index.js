import { combineReducers } from 'redux';
import {all} from 'redux-saga/effects'
import counter, {counterSaga} from './counter';
import sample, {sampleSaga} from './sample';
import todos from './todos';
import loading from './loading';

//기존에 만든 리듀서를 하나로 합침
//createStore 함수를 이용하요 스토어에 저장할 땐 한개의 리듀서만 파라미터로 허용하기 때문
const rootReducer = combineReducers({
  counter,
  todos,
  sample,
  loading
});

export function* rootSaga(){
  //all 함수는 saga를 합쳐줌
  yield all([counterSaga(), sampleSaga()])
}

export default rootReducer;
