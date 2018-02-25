import React from "react";
import { connect } from "react-redux";
import {Route, Redirect} from 'react-router-dom';
import {getIsAuthorized} from '../reducers';

const PrivateRoute = ({component: Component, isAuthorized, ...rest}) => { 
    return(
    <div>{isAuthorized}
    <Route {...rest} render={props => 
        isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
    } />
    </div>
)};

export default connect(state => ({
    isAuthorized: getIsAuthorized(state)
}))(PrivateRoute);