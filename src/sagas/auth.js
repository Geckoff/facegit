import {authorize, setTokenOwner, initAuth} from '../actions/auth';
import {takeLatest, put, call} from 'redux-saga/effects';
import {setTokenApi, getTokenOwner} from '../api';
import {setTokenToLocalStorage, getTokenFromLocalStorage} from '../localStorage';

function* setTokenSaga(action) {
  const token = action.payload;
  
  setTokenApi(token);
  yield call(setTokenToLocalStorage, token);
  const ownerName = yield call(getTokenOwner, token);
  yield put(setTokenOwner(ownerName.data.login));
}

function* checkStorageTokenSaga() {
  const token = yield call(getTokenFromLocalStorage);
  
  if (token) {
    yield put(authorize(token)); 
  }
}

export function* setTokenWatch() {
  yield takeLatest(authorize, setTokenSaga);
  yield takeLatest(initAuth, checkStorageTokenSaga);
}