import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getIsNetworkErrorPresent } from "../reducers";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import AuthPage from "./AuthPage";
import PrivateRoute from "./PrivateRoute";
import '../index.css';

class AppRouter extends Component {
    render() {    
        return (
            <div className="App">
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

export default connect(mapStateToProps)(AppRouter);
export {AppRouter};


//export default AppRouter;