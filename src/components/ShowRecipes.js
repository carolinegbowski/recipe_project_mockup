import React, {useState} from 'react';

function ShowRecipes(props) { 
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    

    async function viewRecipe(id) {
        try {
            const endpoint = 'http://localhost:5000/api/viewRecipe';
            const data = {id: id}
            const configs = {
            method: 'POST',
            body: JSON.stringify(data), 
            mode: 'cors',
            headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
        } catch (err) {
            console.log(err)
        }
    }

    const recipes = props.recipeData.map(recipeDict =>( 
        <p key={recipeDict.id}><img onClick={(e)=> setCurrentRecipeID(String(recipeDict.id))} src={recipeDict.image}/> <p>{recipeDict.title}</p></p>
    ))

    console.log(currentRecipeID)

    return(
        <div>
            {recipes}
        </div>
    )
}

export default ShowRecipes;