import React from 'react';

function ShowRecipes(props) {
    const recipes = props.recipeData.map(recipeDict =>( 
        <p><img src={recipeDict.image}/> <p>{recipeDict.title}</p></p>
    ))
    return(
        <div>
            {recipes}
        </div>
    )
}

export default ShowRecipes;