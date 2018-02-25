import React, { Component }  from "react";
import {fetchUserRequest} from "../actions/users";
import {logout} from "../actions/auth";
import { connect } from "react-redux";
import {getIsLoading, getIsLoaded, getError, getUserData, getTokenOwner} from '../reducers';
import Followers from './Followers'
import Spinner from 'react-svg-spinner';

class UserPage extends Component {

    componentDidMount() {
        let login = this.props.match.params.name;
        const {isLoading, fetchUserRequest, tokenOwner} = this.props;
           
        if (this.props.match.path === "/user/me") 
            login = tokenOwner; 
        if (!isLoading) {
            fetchUserRequest(login);
        }
    }

    componentWillReceiveProps(props) {
        let login = this.props.match.params.name;
        const {isLoading, fetchUserRequest, tokenOwner} = this.props;
           
        if (this.props.match.path === "/user/me") 
            login = tokenOwner; 
        if (!isLoading) {
            fetchUserRequest(login);
        }
    }

    handleLogout = () => {
        this.props.logout();
    }

    render() {        
        const { userData } = this.props,
            { isLoading, isLoaded, error } = this.props;
        if (isLoading || !isLoaded) {
            return <Spinner size="64px" color="fuchsia" gap={5} />;
        } else if (!isLoading && userData == null) {
            return null;
        } else if (error) {
            return (
                <div>Something went wrong!</div>
            );
        } else {
            
            return (
                <div className="user-page">
                    <button onClick={this.handleLogout} className="logout">Logout</button>
                    <div className="main-user">
                        <div className="user-img">
                            <img src={userData.avatar_url} alt={userData.login} />
                        </div>
                        <div className="user-data">
                            <h5>{userData.login}</h5>
                            <p className="followers-number">Followers: {userData.followers}</p>
                            <p>Public Repos: {userData.public_repos}</p>
                        </div> 
                    </div>
                    <Followers login={userData.login} />
                </div> 
            );
        }
    }
}

const mapStateToProps = state => ({
    userData: getUserData(state),
    isLoading: getIsLoading(state),
    isLoaded: getIsLoaded(state),
    error: getError(state),
    tokenOwner: getTokenOwner(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserRequest: (data) => {
            dispatch(fetchUserRequest(data));
        },
        logout: (data) => {
            dispatch(logout(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
export {UserPage};
