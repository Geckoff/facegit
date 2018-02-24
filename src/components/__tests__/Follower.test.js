import React from "react";
import Follower from "../Follower";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

const wrapper = shallow(<Follower login='login' />);

describe('Follower Tests', () => {
    it('Avatar exists', () => {    
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('Login passed with props', () => {   
        expect(wrapper.instance().props.login).toBeDefined();
    });

    it('Login link links to /user/{user.login}', () => { 
        expect(wrapper.find(Link).props().to).toMatch('/user/login');
    });
});