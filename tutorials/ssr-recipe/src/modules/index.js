import { combineReducers } from 'redux';
import users from './users';
// import { all } from 'redux-saga/effects';

// export function* rootSaga() {
//   yield all([usersSaga()]);
// }

const rootReducer = combineReducers({ users });
export default rootReducer;
