import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import countApp from './reducers';

/* 
    const countApp = combineReducers(
        counter//counter 하나가 테이블 처럼 생각하면 편함 
    )
*/
const store = createStore(countApp)
const render = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
store.subscribe(render)// 모든 컴포넌트가 데이터를 가져갈 수 있도록 
render()

serviceWorker.unregister();
