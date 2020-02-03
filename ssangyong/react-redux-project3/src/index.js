import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import movieApp from './reducers';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(movieApp, devTool)
const render = () => {
    ReactDOM.render(<App stroe={store} />, document.getElementById('root'));
}

store.subscribe(render)
render()
serviceWorker.unregister();
