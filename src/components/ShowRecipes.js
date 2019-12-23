import React, {useState} from 'react';
import OneRecipe from './OneRecipe';

function ShowRecipes(props) { 
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    
    let recipes = <p>Unable to load recipe data</p>

    if (props.recipeData.length > 0) {
        recipes = props.recipeData.map(recipeDict =>( 
            <p key={recipeDict.id}><img onClick={(e)=> setCurrentRecipeID(String(recipeDict.id))} src={recipeDict.image}/> <p>{recipeDict.title}</p></p>
        ))
    }
    
    return(
        <div>
            {currentRecipeID ? <OneRecipe recipeID={currentRecipeID}/> : recipes}

        </div>
    )
}

export default ShowRecipes;