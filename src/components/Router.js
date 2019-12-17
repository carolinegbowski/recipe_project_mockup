import React from 'react';
import { Route } from 'react-router-dom';
import MyRecipes from '../containers/MyRecipes';
import NewRecipe from '../containers/NewRecipe';
import BrowseRecipes from '../containers/BrowseRecipes';
import MyAccount from '../containers/MyAccount';

function Router() {
    return (
        <div>
            <Route path='/myAccount' component={MyAccount}/>
            <Route path='/myRecipes' component={MyRecipes}/>
            <Route path='/newRecipe' component={NewRecipe}/>
            <Route path='/browseRecipes' component={BrowseRecipes}/>
        </div>
    )
}

export default Router;