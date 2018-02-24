import { handleActions } from "redux-actions";
import { authorize, setTokenOwner, logout } from "../actions/auth";
import { combineReducers } from "redux";

const isAuthorized = handleActions({
    [setTokenOwner]: () => true,
    [logout]: () => false
}, false);

const tokenOwner = handleActions({
    [setTokenOwner]: (state, action) => action.payload,
    [logout]: () => null
}, null);

export default combineReducers({
    isAuthorized,
    tokenOwner   
});
