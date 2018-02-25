import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/users';
import {takeLatest, call, put} from 'redux-saga/effects';
import {getUserInformation} from '../api';
import requestFlow from './request';

export function* fetchUserSaga(action) {
  try {
    const user = yield call(requestFlow, getUserInformation, action.payload);
    //yield put(fetchUserSuccess(user.data));
    yield put({type: fetchUserSuccess.toString(), payload: user.data});
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}  
