import React from 'react';

async function ViewRecipe(props) {
    try {
        const endpoint = 'http://localhost:5000/api/getInstructions';
        const data = {id: props.recipeID}
        const configs = {
        method: 'POST',
        body: JSON.stringify(data), 
        mode: 'cors',
        headers: {'Content-type' : 'application/json'}
        }
        const res = await fetch(endpoint, configs);
        const json_res_instructions = await res.json();
    } catch (err) {
        console.log("instructions" + err)
    }

    try {
        const endpoint = 'http://localhost:5000/api/getIngredients';
        const data = {id: props.recipeID}
        const configs = {
        method: 'POST',
        body: JSON.stringify(data), 
        mode: 'cors',
        headers: {'Content-type' : 'application/json'}
        }
        const res = await fetch(endpoint, configs);
        const json_res_ingredients = await res.json();
    } catch (err) {
        console.log("ingredients" + err)
    }


    // use map function to format ingredients (list item)
    // use map function to format directions (numbered ptags)
    return(
        <div>
            {/* {json_res} */}
        </div>
    )
}

export default ViewRecipe;