import React, { Component } from 'react';
import axios from "axios"

class ViewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeData: ""
         }
    }

    async getRecipes(){
        const apiData = await axios("http://localhost:3000/test")
        return apiData.data
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
                {this.state.recipeData ? <h1>{this.state.recipeData}</h1> : <h1>Loading</h1>}
            </React.Fragment>
         );
    }
}
 
export default ViewRecipe;