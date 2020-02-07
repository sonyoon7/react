import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer, { rootSaga } from './modules';
// import loggerMiddleware from './lib/loggerMiddleware'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware();

//스토어 만들기 
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
  );
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
