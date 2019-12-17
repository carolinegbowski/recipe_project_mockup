import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return( 
        <div>
            <div class="header-bar">
                <h1>My Company</h1>
                <p>company logo LHS</p>
                <p>user logo RHS</p>
                <hr/>
            </div>
            <div class="links">
                <Link to='/home'>Home</Link>
                <Link to='/myAccount'>My Account</Link>
                <Link to='/myRecipes'>My Recipes</Link>
                <Link to='/newRecipe'>New Recipe</Link>
                <Link to='/suggestedRecipes'>Suggested Recipes</Link>
            </div>
            <hr/>
        </div>
    )
}

export default Header;