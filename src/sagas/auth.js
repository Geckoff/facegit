import { authorize, setTokenOwner, initAuth, logout } from "../actions/auth";
import { takeLatest, put, call } from "redux-saga/effects";
import { setTokenApi, getTokenOwner } from "../api";
import {
    setTokenToLocalStorage,
    getTokenFromLocalStorage,
    removeTokenFromLocalStorage
} from "../localStorage";

export function* setTokenSaga(action) {
    const token = action.payload;

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    const ownerName = yield call(getTokenOwner, token);
    yield put(setTokenOwner(ownerName.data.login));
}

export function* checkStorageTokenSaga() {
    const token = yield call(getTokenFromLocalStorage);

    if (token) {
        yield put(authorize(token));
    }
}

function* removeStorageTokenSaga() {
    yield call(removeTokenFromLocalStorage);
}

export function* setTokenWatch() {
    yield takeLatest(authorize, setTokenSaga);
    yield takeLatest(initAuth, checkStorageTokenSaga);
    yield takeLatest(logout, removeStorageTokenSaga);
}
