import React, { Component } from "react";
import { fetchFollowersRequest } from "../actions/users";
import { connect } from "react-redux";
import {
    getIsLoadingFollowers,
    getIsLoadedFollowers,
    getErrorFollowers,
    getFollowersData
} from "../reducers";
import Follower from "./Follower";
import Spinner from "react-svg-spinner";
import { Link } from "react-router-dom";

class Followers extends Component {
    componentDidMount() {
        const { login, isLoading, fetchFollowersRequest } = this.props;
        if (!isLoading) {
            fetchFollowersRequest(login);
        }
    }

    render() {
        const { isLoading, isLoaded, error, followersData } = this.props;
        if (isLoading || !isLoaded) {
            return <Spinner size="64px" color="fuchsia" gap={5} />;
        } else if (error) {
            return <p>Something went wrong...</p>;
        } else {
            return (
                <div className="followers-block">
                    {   
                        followersData.length === 0 && 
                        <p className="nofollowers">
                            Unfortunately, this user doesn't have any followers... But we know for sure which user has some ->&nbsp; 
                            <Link to={'/user/dex157' }>THIS GUY!</Link>
                        </p>
                    }
                    {followersData.map(follower => (
                        <Follower
                            login={follower.login}
                            img={follower.avatar_url}
                            key={follower.id}
                        />
                    ))}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    followersData: getFollowersData(state),
    isLoading: getIsLoadingFollowers(state),
    isLoaded: getIsLoadedFollowers(state),
    error: getErrorFollowers(state)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowersRequest: data => {
            dispatch(fetchFollowersRequest(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
export {Followers};
