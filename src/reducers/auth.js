import { handleActions } from "redux-actions";
import { authorize, setTokenOwner } from "../actions/auth";
import { combineReducers } from "redux";

const isAuthorized = handleActions({
    [setTokenOwner]: () => true
}, false);

const tokenOwner = handleActions({
    [setTokenOwner]: (state, action) => action.payload
}, null);

export default combineReducers({
    isAuthorized,
    tokenOwner   
});
