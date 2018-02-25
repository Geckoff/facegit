import { fetchFollowersSaga } from "../followers";
import { call, put } from "redux-saga/effects";
import requestFlow from "../request";
import { getUserFollowers } from "../../api";
import { fetchFollowersSuccess } from '../../actions/users';

describe("User saga test", () => {
    const payloadToPass = { payload: "test" },
        saga = fetchFollowersSaga(payloadToPass);
    it("Step 1 - call requestFlow", () => {
        expect(saga.next().value).toEqual(
            call(requestFlow, getUserFollowers, "test")
        );
    });
    it("Step 2 - dispatch fetchFollowersSuccess", () => {
        expect(saga.next({data: 'test'}).value).toEqual(
            put(fetchFollowersSuccess('test'))
        );
    });
});
