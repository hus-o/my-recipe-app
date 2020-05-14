import React, { Component } from 'react';
import axios from "axios"
import {Link} from 'react-router-dom'

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            ingredients: "",
            recipe: "",
            time: 0,
            apiResponse: ""
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
         });
      }

      handleSubmit(event) {
          event.preventDefault()
          axios.post("http://localhost:3000/addrecipe",{
              name:this.state.name,
              ingredients: this.state.ingredients,
              recipe: this.state.recipe,
              time_taken_minutes: this.state.time
          }
          ).then(response => {
              console.log(response)
              this.setState({apiResponse:response.data})
          })
        };

    render() { 
        return ( 
            <React.Fragment>
                <form>
                    <label htmlFor="recipeName">
                        Name of recipe: 
                    <input type="text" id="recipeName" name="name" value = {this.state.name}
                        onChange={this.handleChange}/>
                    </label><br/><br/>
                    <label htmlFor="recipeIngredients">
                        Ingredients:
                    <textarea id="recipeIngredients" name="ingredients" value = {this.state.ingredients}
                        onChange={this.handleChange}/>
                    </label><br/><br/>
                    <label htmlFor="recipeInstructions">
                        Instructions: 
                    <textarea id="recipeInstructions" name="recipe" value = {this.state.recipe}
                        onChange={this.handleChange}/>
                    </label><br/><br/>
                    <label htmlFor="recipeTime">
                        Time taken in minutes: 
                    {/* <input type="number" id="recipeTime" name="time_taken_minutes" value = {this.state.time}
                        onChange={this.handleChange}/> */}
                    <input id="recipeTime" name="time_taken_minutes" value={this.state.time} onChange={event => this.setState({time: event.target.value.replace(/\D/,'')})}/>
                    </label><br/><br/>
                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
                {this.state.apiResponse ? 
                <div>
                    <h2>{this.state.apiResponse}</h2>
                    <Link to="/view">
                    <input type="button" value="View" />
                    </Link>
                </div> 
                : <h2>Nothing submitted yet</h2>}
            </React.Fragment>
         );
    }
}
 
export default AddRecipe;