import React from "react";
import UserPage from "../UserPage";
import { shallow } from "enzyme";

const wrapper = shallow(<UserPage />).dive();

it('method componentDidMount exists', () => {    
    //expect(UserPage.componentDidMount).toBeDefined();
})

// it('contains PrivateRoute with path=/user/:name', () => {    
//     const privateRoute = wrapper.find(PrivateRoute).get(0);
//     expect(privateRoute.props.path).toMatch('/user/:name');
// })

// it('contains Switch', () => {    
//     expect(wrapper.find('Switch')).toHaveLength(1);
// })

// it('contains Route with path=/login', () => {    
//     const privateRoute = wrapper.find(Route).get(0);
//     expect(privateRoute.props.path).toMatch('/login');
// })
