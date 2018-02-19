import React, { Component }  from "react";
import {fetchUserRequest} from "../actions/users";
import { connect } from "react-redux";
import {getIsLoading, getIsLoaded, getError, getUserData} from '../reducers';
import Followers from './Followers'
import Spinner from 'react-svg-spinner';

class UserPage extends Component {
    constructor(props) {
        super(props);
        const login = this.props.match.params.name,
            { isLoading, isLoaded, fetchUserRequest } = this.props;

        if (!isLoading) {
            fetchUserRequest(login);
        }
    }

    componentWillReceiveProps(props) {
        const login = this.props.match.params.name,
        { isLoading, isLoaded, fetchUserRequest } = this.props;

        if (!isLoading) {
            fetchUserRequest(login);
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log(this.props.userData)
        const { userData } = this.props,
            { isLoading, isLoaded, error } = this.props;
        if (isLoading || !isLoaded) {
            return <Spinner size="64px" color="fuchsia" gap={5} />;
        } else if (error) {
            return (
                <div>Something went wrong!</div>
            );
        } else {
            return (
                <div className="user-page">
                    <div className="main-user">
                        <div className="user-img">
                            <img src={userData.avatar_url} alt={userData.login} />
                        </div>
                        <div className="user-data">
                            <h5>{userData.login}</h5>
                            <p>Followers: {userData.followers}</p>
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
    error: getError(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserRequest: (data) => {
            dispatch(fetchUserRequest(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
export {UserPage};
