import { isFetching, followersData, error } from "../followers";
import {fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure} from "../../actions/users";

describe("Followers reducers test", () => {
    it("Actions fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure:", () => {
        const isFetchingRequest = isFetching(false, {
            type: fetchFollowersRequest
        });
        expect(isFetchingRequest).toEqual(true);

        const isFetchingSuccess = isFetching(false, {
            type: fetchFollowersSuccess
        });
        expect(isFetchingSuccess).toEqual(false);        

        const isFetchingFailure = isFetching(false, {
            type: fetchFollowersFailure
        });
        expect(isFetchingFailure).toEqual(false);
    });

    it("fetchFollowersRequest clears userData", () => {
        const userDataRequest = followersData({test: 'test'}, {
            type: fetchFollowersRequest
        });
        expect(userDataRequest).toEqual(null);        
    });

    it("fetchFollowersRequest populates userData", () => {
        const dataToPopulate = {test: 'test'};
        const userDataSuccess = followersData(null, {
            type: fetchFollowersSuccess,
            payload: dataToPopulate 
        });
        expect(userDataSuccess).toEqual(dataToPopulate);        
    });

    it("fetchFollowersRequest and fetchFollowersSuccess clear error", () => {
        const errorRequest = error({}, {
            type: fetchFollowersRequest
        });
        expect(errorRequest).toEqual(null);    
        
        const errorSuccess = error({}, {
            type: fetchFollowersSuccess
        });
        expect(errorSuccess).toEqual(null); 
    });

    it("fetchFollowersFailure populates error", () => {
        const errorToPopulate = {test: 'test'};
        const errorFailure = error(null, {
            type: fetchFollowersFailure,
            payload: errorToPopulate 
        });
        expect(errorFailure).toEqual(errorToPopulate);        
    });
});
