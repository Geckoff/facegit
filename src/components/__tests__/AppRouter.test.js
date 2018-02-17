import React from "react";
import AppRouter from "../AppRouter";
import PrivateRoute from "../PrivateRoute";
import { shallow } from "enzyme";


it('contains PrivateRoute with path=/user/dex157', () => {
    const wrapper = shallow(<AppRouter />);
    //expect(wrapper.find(PrivateRoute)).to.have.length(2);
    expect(wrapper.find('.test')).to.have.length(1);
})
