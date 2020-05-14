import React from 'react';
import {shallow} from "enzyme"
import ViewRecipe from "../components/viewRecipe"

describe("View Page", () =>{
    const wrapper = shallow(<ViewRecipe />)
    it('calls componentDidMount', () => {
        const spy = jest.spyOn(ViewRecipe.prototype, 'componentDidMount');
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();;
    })

    /* it("recipeData state changes", () =>{
        wrapper.instance().getRecipes()
        expect(wrapper.state("recipeData")).toEqual("BBQ Wings")
    }) */
})