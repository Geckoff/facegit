import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getIsNetworkErrorPresent } from "../reducers";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import AuthPage from "./AuthPage";
import PrivateRoute from "./PrivateRoute";
import '../index.css';
import { withRouter } from 'react-router';

class AppRouter extends Component {
    render() {    
        const networkError = this.props.isNetworkErrorPresent;
        return (
            <div className="App">
                {networkError && <div className="network-error"><p>{networkError.message}</p></div>}
                <Switch>
                    <PrivateRoute exact path="/user/me" component={UserPage} /> 
                    <PrivateRoute path="/user/:name" component={UserPage} /> 
                    <Route path="/login" component={AuthPage} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    } 
}

const mapStateToProps = state => ({
    isNetworkErrorPresent: getIsNetworkErrorPresent(state)
});

export default withRouter(connect(mapStateToProps)(AppRouter));
export {AppRouter};