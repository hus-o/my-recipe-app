import React, { Component } from 'react';
import axios from "axios"
import {Link} from 'react-router-dom'

class ViewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeData: ""
         }
    }

    async getRecipes(){
        const apiData = await axios("http://localhost:3000/all")
        console.log(apiData)
        return apiData.data.recipes
    }

    renderData(){
        const {recipeData} = this.state
        return(
        recipeData.map((element,index) => (
            <ul key={index}>
                <li>Name: {element.name}</li>
                <li>Ingredients: {element.ingredients}</li>
            </ul>
        )));
    }
    componentDidMount(){
        this.getRecipes().then(data => {
            console.log(data)
            this.setState({recipeData:data})
        })
    }

    render() { 
        console.log(this.state.recipeData)
        return ( 
            <React.Fragment>
                {this.state.recipeData ? 
                this.renderData() :
                 <h1>Loading</h1>}
                <Link to="/">
                <input type="button" value="Home" />
                </Link>
                <Link to="/add">
                <input type="button" value="Add" />
                </Link>
            </React.Fragment>
         );
    }
}
 
export default ViewRecipe;