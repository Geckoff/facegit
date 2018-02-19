import React  from "react";
import { Link } from "react-router-dom";

export default ({login, img}) => (
    <div className="single-follower">
        <div className="follower-img">
            <img src={img} alt={login} />
        </div>
        <Link to={'/user/' + login}>{login}</Link>
    </div>
)