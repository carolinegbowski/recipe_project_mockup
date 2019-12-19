import React from 'react';

function ShowRecipes(props) {
    let recipeData = props.recipeData;
    console.log(recipeData)
    const recipes = recipeData.map(recipeDict =>( 
        <p>{recipeDict.image} {recipeDict.title}</p>
    ))

    return(
        <div>
            {recipes}
        </div>
    )
}

export default ShowRecipes;