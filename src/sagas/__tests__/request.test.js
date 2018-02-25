import requestSaga from "../request";
import { call, put, select } from "redux-saga/effects";
import {clearNetworkErrors, networkError} from '../../actions/network';
import {logout} from '../../actions/auth';
import {getIsNetworkErrorPresent} from '../../reducers';

describe("No response error, no existing network error", () => {
    const apiFn = jest.fn(),
        args = 'test', 
        saga = requestSaga(apiFn, args);
    it("1. Call api function", () => {
        expect(saga.next().value).toEqual(
            call(apiFn, args)
        );
    });
    it("2. Check if network error exists", () => {
        expect(saga.next().value).toEqual(
            select(getIsNetworkErrorPresent)
        );
    });
    it("3. Returns value", () => {
        // currently check if the generator is done, but would like to check if the value was returned
        // how to check if generator returns a particular value?
        expect(saga.next(false).done).toEqual(true);
    });
});

describe("No response error, network error exists", () => {
    const apiFn = jest.fn(),
        args = 'test', 
        saga = requestSaga(apiFn, args);
    it("1. Call api function", () => {
        expect(saga.next().value).toEqual(
            call(apiFn, args)
        );
    });
    it("2. Check if network error exists", () => {
        expect(saga.next().value).toEqual(
            select(getIsNetworkErrorPresent)
        );
    });
    it("3. Clear network error", () => {
        expect(saga.next(true).value).toEqual(
            put(clearNetworkErrors())
        );
    });
    it("4. Returns value", () => {
        // currently check if the generator is done, but would like to check if the value was returned
        // how to check if generator returns a particular value?
        expect(saga.next().done).toEqual(true);
    });
});

describe("401 error", () => {
    const apiFn = jest.fn(),
        args = 'test', 
        saga = requestSaga(apiFn, args);
    it("1. Call api function", () => {
        expect(saga.next().value).toEqual(
            call(apiFn, args)
        );
    });
    it("2. Log network error", () => {
        const error = {response: {status: 401}}
        expect(saga.throw(error).value).toEqual(
            put(networkError(error))
        );
    });
    it("3. Logout", () => {
        expect(saga.next().value).toEqual(
            put(logout())
        );
    });
    it("4. Throw error", () => {
        expect(() => {saga.next()}).toThrow();
    });
});
