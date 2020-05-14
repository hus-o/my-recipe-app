import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
        <h1>Welcome to Recipes</h1>
        <p>You can add or view recipes</p>
        <Link to="/view">
        <input type="button" value="View" />
        </Link>
        <Link to="/add">
        <input type="button" value="Add" />
        </Link>
        </React.Fragment>
     );
}
 
export default Home;