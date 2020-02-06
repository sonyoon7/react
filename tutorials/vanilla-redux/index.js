import {createStore} from 'redux'

//DOM 레퍼런스 만들기
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생성 함수 정의
const toggleSwitch = ()=>({type: TOGGLE_SWITCH})
const increase = difference =>({type: INCREASE, difference})
const decrease = ()=>({type: DECREASE})

//초기값 설정
const initialState ={
    toggle: false,
    counter: 0
}

//리듀스 함수 정의
function reducer(state = initialState, action) { // 현재 상태와  변한 상태를 받아옴 

    switch (action.type) {
        case TOGGLE_SWITCH:
            return{
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return{
                ...state,
                counter: state.counter + state.difference
            };    
        case DECREASE:
            return{
                ...state,
                counter: state.counter -1
            };
    
        default:
            return state;
    }
    
}

//스토어 만들기
const store = createStore(reducer)

//render함수 만들기 

const render = () =>{
    const state = store.getState();

    //토글 처리 
    if(state.toggle){
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
}

render();

//구독하기 
store.subscribe(render)

//액션 발생시키기 
divToggle.onClick =()=>{
    console.log('눌림')
    store.dispatch(toggleSwitch());
}

btnIncrease.onClick =()=>{
    console.log('눌림')
    store.dispatch(increase());
}

btnDecrease.onClick =()=>{
    console.log('눌림')
    store.dispatch(decrease());
}