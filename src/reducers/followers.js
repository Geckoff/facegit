import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
} from "../actions/users";
import { handleActions } from "redux-actions";
import {combineReducers} from 'redux';

export const isFetching = handleActions(
    {
        [fetchFollowersRequest]: () => true,
        [fetchFollowersSuccess]: () => false,
        [fetchFollowersFailure]: () => false
    },
    false
);

export const isFetched = handleActions(
    {
        [fetchFollowersRequest]: () => false,
        [fetchFollowersSuccess]: () => true,
        [fetchFollowersFailure]: () => true
    },
    false
);

export const error = handleActions(
    {
        [fetchFollowersRequest]: () => null,
        [fetchFollowersSuccess]: () => null,
        [fetchFollowersFailure]: (state, action) => action.payload
    },
    null
);

export const followersData = handleActions(
    {
        [fetchFollowersRequest]: () => null,
        [fetchFollowersSuccess]: (state, action) => action.payload,
        [fetchFollowersFailure]: () => null
    },
    {}
);

export default combineReducers({
    isFetching,
    isFetched,
    error,
    followersData
});

