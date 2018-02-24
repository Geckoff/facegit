import React, { Component } from "react";
import {authorize, initAuth} from "../actions/auth";
import { connect } from "react-redux";
import {getIsAuthorized} from '../reducers';
import { Redirect } from "react-router-dom";

class AuthPage extends Component {

    componentDidMount() {
        this.props.initAuth();
    }

    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.props.authorize(event.target.value);
        }
    };

    render() {
        const {isAuthorized} = this.props;
        if (isAuthorized) {
            return (
                <div className="login">
                    <Redirect to="/user/me" />
                </div>
            );
        } else {
            return (
                <div className="login">
                    <p>Please enter your github token to setup connection</p>
                    <input placeholder="auth_token" onKeyPress={this.handleKeyPress} />
                    <p>Then press Enter to continue</p>
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        authorize: (data) => {
            dispatch(authorize(data));
        },
        initAuth: (data) => {
            dispatch(initAuth(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);