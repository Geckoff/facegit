import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
} from "../actions/users";
import {combineReducers} from 'redux';

import { handleActions } from "redux-actions";

export const isFetching = handleActions(
    {
        [fetchUserRequest]: () => true,
        [fetchUserSuccess]: () => false,
        [fetchUserFailure]: () => false,
    },
    false
);

export const isFetched = handleActions(
    {
        [fetchUserRequest]: () => false,
        [fetchUserSuccess]: () => true,
        [fetchUserFailure]: () => true,
    },
    false
);

export const error = handleActions(
    {
        [fetchUserRequest]: () => null,
        [fetchUserSuccess]: () => null,
        [fetchUserFailure]: (state, action) => action.payload,
    },
    null
);

export const userData = handleActions(
    {
        [fetchUserRequest]: () => null,
        [fetchUserSuccess]: (state, action) => action.payload,
        [fetchUserFailure]: () => null
    },
    {}
);

export default combineReducers({
    isFetching,
    isFetched,
    error,
    userData
});


