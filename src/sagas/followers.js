import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
} from '../actions/users';
import {takeLatest, call, put} from 'redux-saga/effects';
import {getUserFollowers} from '../api';
import requestFlow from './request';

export function* fetchFollowersSaga(action) {
  try {
    const response = yield call(requestFlow, getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(response.data));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
