import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ViewRecipe from "./components/viewRecipe"
import Home from "./components/homepage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view" component={ViewRecipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
