import {combineReducers} from 'redux';
import users from "./users";
import followers from "./followers";
import isNetworkErrorPresent from "./network";
import auth from "./auth";

export default combineReducers({
    auth,
    users,
    followers,
    isNetworkErrorPresent
});

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getTokenOwner = state => state.auth.tokenOwner;
export const getIsLoading = state => state.users.isFetching;
export const getIsLoaded = state => state.users.isFetched;
export const getError = state => state.users.error;
export const getUserData = state => state.users.userData;
export const getIsLoadingFollowers = state => state.followers.isFetching;
export const getIsLoadedFollowers = state => state.followers.isFetched;
export const getErrorFollowers = state => state.followers.error;
export const getFollowersData = state => state.followers.followersData;
export const getIsNetworkErrorPresent = state => state.isNetworkErrorPresent;