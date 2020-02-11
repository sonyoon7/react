import { combineReducers } from 'redux';
import users,{usersSaga} from './users';
import { all } from 'redux-saga/effects';

//all 함수는 여러 합수를 합쳐주는 역할을 함
export function* rootSaga() {
  yield all([usersSaga()]);
}

const rootReducer = combineReducers({ users });
export default rootReducer;
