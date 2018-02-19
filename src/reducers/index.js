import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import users from "./users";
import followers from "./followers";
import {isAuthorized} from "./auth";

export default combineReducers({
    isAuthorized,
    users,
    followers
});

export const getIsAuthorized = state => state.isAuthorized;
export const getIsLoading = state => state.users.isFetching;
export const getIsLoaded = state => state.users.isFetched;
export const getError = state => state.users.error;
export const getUserData = state => state.users.userData;
export const getIsLoadingFollowers = state => state.followers.isFetching;
export const getIsLoadedFollowers = state => state.followers.isFetched;
export const getErrorFollowers = state => state.followers.error;
export const getFollowersData = state => state.followers.followersData;