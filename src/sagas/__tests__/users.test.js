import { fetchUserSaga } from "../users";
import { call, put } from "redux-saga/effects";
import requestFlow from "../request";
import { getUserInformation } from "../../api";
import { fetchUserSuccess } from '../../actions/users';

describe("User saga test", () => {
    const payloadToPass = { payload: "Geckoff" },
        saga = fetchUserSaga(payloadToPass);
    it("Step 1 - call requestFlow", () => {
        expect(saga.next().value).toEqual(
            call(requestFlow, getUserInformation, "Geckoff")
        );
    });
    it("Step 2 - dispatch fetchUserSuccess", () => {
        expect(saga.next({data: 'test'}).value).toEqual(
            put(fetchUserSuccess('test'))
        );
    });
});
