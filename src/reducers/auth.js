import { handleActions } from "redux-actions";
import { authorize } from "../actions/auth";

export const isAuthorized = handleActions({
    [authorize]: () => true
}, false);
