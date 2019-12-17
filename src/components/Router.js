import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home';
import MyAccount from '../containers/MyAccount';
import MyRecipes from '../containers/MyRecipes';
import NewRecipe from '../containers/NewRecipe';
import SuggestedRecipes from '../containers/SuggestedRecipes';

function Router() {
    return (
        <div>
            <Route path='/home' component={Home}/>
            <Route path='/myAccount' component={MyAccount}/>
            <Route path='/myRecipes' component={MyRecipes}/>
            <Route path='/newRecipe' component={NewRecipe}/>
            <Route path='/suggestedRecipes' component={SuggestedRecipes}/>
        </div>
    )
}

export default Router;