import React from "react";
import {UserPage} from "../UserPage";
import FollowersWithConnect from "../Followers";
import { shallow } from "enzyme";

const obj = {params: {name: 'test'}};
const mock = jest.fn();

describe('UserPage Tests', () => {
    let wrapper = shallow(<UserPage match={obj} fetchUserRequest={mock} isLoading={true} isLoaded={false} />);
    it('method componentDidMount exists', () => {    
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('method componentWillReceiveProps exists', () => {    
        expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });

    it('Loader shows up if props.isLoading === true', () => {    
        expect(wrapper.find('Spinner')).toHaveLength(1);
    });
});

describe('Main Structure', () => {
    const userData = {
        followers: 13,
        login: 'test',
    }
    const wrapper = shallow(<UserPage match={obj} fetchUserRequest={mock} isLoading={false} isLoaded={true} userData={userData} />);

    it('Avatar exists', () => {        
        expect(wrapper.find('.user-img')).toHaveLength(1);
    });

    it('Login exists', () => {     
        expect(wrapper.find('h5').text()).toEqual('test');
    });

    // not working
    it('Followers number exists', () => {     
        //  expect(wrapper.find('p').get(0).text()).toEqual('Followers: 13');
        expect(wrapper.find('.followers-number').text()).toEqual('Followers: 13');
    });

    // not working
    it('Followers component with Login property exists', () => {     
        const followers = wrapper.find(FollowersWithConnect);
        expect(followers).toHaveLength(1);
        expect(followers.prop("login")).toEqual('test');
    });
});


