import React, { Component }  from "react";
import {fetchFollowersRequest} from "../actions/users";
import { connect } from "react-redux";
import {getIsLoadingFollowers, getIsLoadedFollowers, getErrorFollowers, getFollowersData} from '../reducers';
import Follower from './Follower';
import Spinner from 'react-svg-spinner';

class Followers extends Component {
    constructor(props) {
        super(props);
        const {login, isLoading, fetchFollowersRequest} = this.props;
        if (!isLoading) {
            fetchFollowersRequest(login);     
        }
    }

    render() {
        const {isLoading, isLoaded, error, followersData} = this.props;
        if (isLoading || !isLoaded) {
            return <Spinner size="64px" color="fuchsia" gap={5} />;
        } else if (error) {
            return <p>Something went wrong...</p>
        } else {
            console.log(followersData);
            return (
                <div className="followers-block">
                    {followersData.map((follower) => (
                        <Follower login={follower.login} img={follower.avatar_url} key={follower.id} />    
                    ))}
                </div>
            )
        }        
    }
}

const mapStateToProps = state => ({
    followersData: getFollowersData(state),
    isLoading: getIsLoadingFollowers(state),
    isLoaded: getIsLoadedFollowers(state),
    error: getErrorFollowers(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFollowersRequest: (data) => {
            dispatch(fetchFollowersRequest(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers);