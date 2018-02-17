import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const isAuthorized = handleActions({}, false);

export default combineReducers({
    isAuthorized
});

export const getIsAuthorized = state => state.isAuthorized;