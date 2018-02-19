import React from "react";
import AppRouter from "../AppRouter";
import PrivateRoute from "../PrivateRoute";
import { shallow } from "enzyme";
import { Route, Switch, Redirect } from "react-router-dom";

const wrapper = shallow(<AppRouter />);

it('contains PrivateRoute with path=/user/:name', () => {    
    const privateRoute = wrapper.find(PrivateRoute).get(0);
    expect(privateRoute.props.path).toMatch('/user/:name');
})

it('contains Switch', () => {    
    expect(wrapper.find('Switch')).toHaveLength(1);
})

it('contains Route with path=/login', () => {    
    const privateRoute = wrapper.find(Route).get(0);
    expect(privateRoute.props.path).toMatch('/login');
})
