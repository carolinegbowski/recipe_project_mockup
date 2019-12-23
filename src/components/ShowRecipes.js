import React, {useState} from 'react';
import ViewRecipe from './ViewRecipe';

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
            {currentRecipeID ? <ViewRecipe recipeID={currentRecipeID}/> : recipes}
        </div>
        // <div>
        //     {recipes}
        // </div>
    )
}

export default ShowRecipes;