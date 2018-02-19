import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { getIsAuthorized } from "../reducers";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import AuthPage from "./AuthPage";
import PrivateRoute from "./PrivateRoute";
import '../index.css';

class AppRouter extends Component {
    render() { 
        const { isAuthorized } = this.props;      
        return (
            <div className="App">
                <Switch>
                    <PrivateRoute path="/user/:name" component={UserPage} /> 
                    <Route path="/login" component={AuthPage} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    } 
}

export default AppRouter;