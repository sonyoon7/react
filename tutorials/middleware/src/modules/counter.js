import { createAction, handleActions } from 'redux-actions';
import {delay, put, takeEvery, takeLatest, select} from 'redux-saga/effects'

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';
//마우스 클릭 이벤트가 PAYLOAD 안에 들어가지 않도록 
//()=> undefined 를 두 번째 파라미터로 넣어 줍니다. 


//액션 생성 함수 만들기 
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE, ()=> undefined);//type 지정
export const decreaseAsync = createAction(DECREASE, ()=> undefined);//export const decrease = ()=>({type: DECREASE})

// export const increaseAsync = () => dispatch =>{
//   //increaseAsync 를 호출하고 바로 실행하지 않고 
//   // 몇초 있다가 나중에 실행하도록.... 비동기 처리 dispath()=>{ 여기에 다른 작업을 실행 }
//   setTimeout(() => {
//     dispatch(increase())
//   }, 3000);
// }

// export const decreaseAsync = () => dispatch =>{
//   setTimeout(() => {
//     dispatch(decrease())
//   }, 2000);
// }

function* increaseSaga(){
  yield delay(1000);
  yield put(increase())// 특정 액션을 디스패치 합니다.
  const number = yield select(state=> state.counter)
  console.log(`현재 값은  ${number}입니다`)
}

function* decreaseSaga(){
  yield delay(1000);
  yield put(decrease())// 특정 액션을 디스패치 합니다.
}

export function* counterSaga(){
  //takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
  yield takeEvery(INCREASE_ASYNC, increaseSaga)
  yield takeLatest(INCREASE_ASYNC, decreaseSaga)
}

//초기 상태
const initialState = {
  number: 0,
};

//리듀서 함수 만들기 
const counter = handleActions( //switch문 대신
  //각 액션에 대한 업데이트 함수 
  {
    [INCREASE]: state => ({number: state.number+1}), //해당 타입 호출
    [DECREASE]: state => ({number: state.number-1}),
  },
  initialState, //초기값
);

export default counter;
