import {authorize, setTokenOwner} from '../actions/auth';
import {takeLatest, put, call} from 'redux-saga/effects';
import {setTokenApi, getTokenOwner} from '../api';

function* setTokenSaga(action) {
  const token = action.payload,
    tokenObj = {token};
  
  setTokenApi(token);
  localStorage.data = JSON.stringify(tokenObj);
  const ownerName = yield call(getTokenOwner, token);
  yield put(setTokenOwner(ownerName.data.login));
}

export function* setTokenWatch() {
  yield takeLatest(authorize, setTokenSaga);
}
