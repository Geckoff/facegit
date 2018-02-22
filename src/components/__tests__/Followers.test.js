import React from "react";
import {Followers} from "../Followers";
import { shallow } from "enzyme";


const followersData = new Array(10),
    mock = jest.fn();
let wrapper = shallow(<Followers fetchFollowersRequest={mock} followersData={followersData} />);

describe('Followers Tests', () => {
    it('method componentDidMount exists', () => {    
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('Loader shows up if props.isLoading === true', () => {    
        expect(wrapper.find('Spinner')).toHaveLength(1);
    });

    //not working    
    it('Number of Follower components matches number of passed followers', () => { 
        const wrapper = shallow(<Followers isLoading={false} isLoaded={true} fetchFollowersRequest={mock} followersData={followersData} />);   
        expect(wrapper.find('Follower')).toHaveLength(10);
    });
});