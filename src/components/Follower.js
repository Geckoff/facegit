import React, {Component}  from "react";
import { Link } from "react-router-dom";

class Follower extends Component{
    render() {
        const {login, img} = this.props;
        return (
            <div className="single-follower">
                <div className="follower-img">
                    <img src={img} alt={login} />
                </div>
                <Link to={'/user/' + login}>{login}</Link>
            </div>
        )
    }
}
export default Follower;