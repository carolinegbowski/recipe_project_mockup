// CAN DELETE THIS COMPONENT

import React from 'react';

async function ViewRecipe(props) {
    console.log("recipe ID")
    console.log(props.recipeID)

    // sample recipe id 423972


    // try {
    //     const endpoint = 'http://localhost:5000/api/getInstructions';
    //     const data = {id: props.recipeID}
    //     const configs = {
    //     method: 'POST',
    //     body: JSON.stringify(data), 
    //     mode: 'cors',
    //     headers: {'Content-type' : 'application/json'}
    //     }
    //     const res = await fetch(endpoint, configs);
    //     const json_res_instructions = await res.json();
    // } catch (err) {
    //     console.log("instructions" + err)
    // }

    
    let myIngredientsResponse = {"ingredients":[{"name":"diced bacon strips","amount":{"metric":{"value":2.0,"unit":""},"us":{"value":2.0,"unit":""}}}]}

    // try {
    //     const endpoint = 'http://localhost:5000/api/getIngredients';
    //     const data = {id: props.recipeID}
    //     const configs = {
    //     method: 'POST',
    //     body: JSON.stringify(data), 
    //     mode: 'cors',
    //     headers: {'Content-type' : 'application/json'}
    //     }
    //     const res = await fetch(endpoint, configs);
    //     const json_res_ingredients = await res.json();
    // } catch (err) {
    //     console.log("ingredients" + err)
    // }

    let ingredientsArray = myIngredientsResponse["ingredients"]

    let ingredients = ingredientsArray.map(ingredientDict =>( 
        <p>{ingredientDict.amount.us.value} {ingredientDict.amount.us.unit} {ingredientDict.name}</p>
    ))
    

    // let instructionsArray = [0]['steps']
    // console.log(instructionsArray)
    // let instructions = instructionsArray.map(instructionsDict =>( 
    //     <p> {instructionsDict.number} {instructionsDict.step}</p>
    // ))

    // use map function to format ingredients (list item)
    // use map function to format directions (numbered ptags)
    
    return(
        <div>
            <h1>VIEW RECIPE</h1>
            {ingredients}
            <hr/>
            {/* {instructions} */}
        </div>
    )
}

export default ViewRecipe;