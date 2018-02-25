import { authorize, setTokenOwner, initAuth, logout } from "../../actions/auth";
import { setTokenSaga, checkStorageTokenSaga } from "../auth";
import { call, put } from "redux-saga/effects";
import {
    setTokenToLocalStorage,
    getTokenFromLocalStorage
} from "../../localStorage";
import { setTokenApi, getTokenOwner } from "../../api";

describe("Auth setTokenSaga saga test", () => {
    const action = {payload: 'test'}, 
        saga = setTokenSaga(action);        

    it("1. Call setTokenApi", () => {
        expect(saga.next().value).toEqual(
            call(setTokenApi, 'test')
        );
    });
    it("2. Call setTokenToLocalStorage", () => {
        expect(saga.next().value).toEqual(
            call(setTokenToLocalStorage, 'test')
        );
    });
    it("3. Call getTokenOwner", () => {
        expect(saga.next().value).toEqual(
            call(getTokenOwner, 'test')
        );
    });
    it("4. Set Token Owner", () => {
        expect(saga.next({data: 'Geckoff'}).value).toEqual(
            put(setTokenOwner())
        );
    });
    it("5. The end if the generator", () => {
        expect(saga.next().done).toEqual(true);
    });
});

describe("Auth checkStorageTokenSaga saga test. Authorize user if there is a token in localStorage", () => {
    const saga = checkStorageTokenSaga();        

    it("1. Call getTokenFromLocalStorage", () => {
        expect(saga.next().value).toEqual(
            call(getTokenFromLocalStorage)
        );
    });
    it("2. Authorize user", () => {
        expect(saga.next('test').value).toEqual(
            put(authorize('test'))
        );
    });
    it("3. The end if the generator", () => {
        expect(saga.next().done).toEqual(true);
    });
});

describe("Auth checkStorageTokenSaga saga test. Authorize user if there is no token in localStorage", () => {
    const saga = checkStorageTokenSaga();        

    it("1. Call getTokenFromLocalStorage", () => {
        expect(saga.next().value).toEqual(
            call(getTokenFromLocalStorage)
        );
    });
    it("2. Authorize user", () => {
        expect(saga.next(false).done).toEqual(true);
    });
});
