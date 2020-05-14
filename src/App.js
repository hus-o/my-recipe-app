import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ViewRecipe from "./components/viewRecipe"
import AddRecipe from "./components/postRecipe"
import Home from "./components/homepage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view" component={ViewRecipe} />
          <Route path="/add" component={AddRecipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
