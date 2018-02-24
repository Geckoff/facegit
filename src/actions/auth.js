import { createActions } from "redux-actions";

export const { authorize, setTokenOwner, initAuth, logout } = createActions(
    "AUTHORIZE",
    "SET_TOKEN_OWNER",
    "INIT_AUTH",
    "LOGOUT"
);
