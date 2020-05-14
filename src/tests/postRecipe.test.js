import React from 'react';
import { shallow } from 'enzyme';
import AddRecipe from '../components/postRecipe';
import { spy } from 'sinon';

describe("Posting Recipe", () =>{
    it("should return if submit works", () => {
        const wrapper = shallow(<AddRecipe />)
        const mockPreventDefault = jest.fn();
        const mockEvent = {
            preventDefault: mockPreventDefault
        };
        const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
        wrapper.instance().forceUpdate();
        
        wrapper.instance().handleSubmit(mockEvent);
        expect(spy).toReturn();
    })
});