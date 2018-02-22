import { isFetching, userData, error } from "../users";
import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from "../../actions/users";

describe("User reducers test", () => {
    it("Actions fetchUserRequest, fetchUserSuccess, fetchUserFailure:", () => {
        const isFetchingRequest = isFetching(false, {
            type: fetchUserRequest
        });
        expect(isFetchingRequest).toEqual(true);

        const isFetchingSuccess = isFetching(false, {
            type: fetchUserSuccess
        });
        expect(isFetchingSuccess).toEqual(false);        

        const isFetchingFailure = isFetching(false, {
            type: fetchUserFailure
        });
        expect(isFetchingFailure).toEqual(false);
    });

    it("fetchUserRequest clears userData", () => {
        const userDataRequest = userData({test: 'test'}, {
            type: fetchUserRequest
        });
        expect(userDataRequest).toEqual(null);        
    });

    it("fetchUserRequest populates userData", () => {
        const dataToPopulate = {test: 'test'};
        const userDataSuccess = userData(null, {
            type: fetchUserSuccess,
            payload: dataToPopulate 
        });
        expect(userDataSuccess).toEqual(dataToPopulate);        
    });

    it("fetchUserRequest and fetchUserSuccess clear error", () => {
        const errorRequest = error({}, {
            type: fetchUserRequest
        });
        expect(errorRequest).toEqual(null);    
        
        const errorSuccess = error({}, {
            type: fetchUserSuccess
        });
        expect(errorSuccess).toEqual(null); 
    });

    it("fetchUserFailure populates error", () => {
        const errorToPopulate = {test: 'test'};
        const errorFailure = error(null, {
            type: fetchUserFailure,
            payload: errorToPopulate 
        });
        expect(errorFailure).toEqual(errorToPopulate);        
    });
});
