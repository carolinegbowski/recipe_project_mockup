import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return( 
        <div>
            <Link to='/myAccount'>My Account</Link>
            <Link to='/myRecipes'>My Recipes</Link>
            <Link to='/newRecipe'>New Recipe</Link>
            <Link to='/browseRecipes'>Browse Recipes</Link>
        </div>
    )
}

export default Header;