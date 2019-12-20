import React, { useState } from 'react';
import ShowIngredients from '../components/ShowIngredients';
import SearchNewRecipe from '../components/SearchNewRecipe';
import ShowRecipes from '../components/ShowRecipes';

function NewRecipe() {
    const [ingredient, setIngredient] = useState('')
    const [ingredientsList, setIngredientsList] = useState([])
    const [recipeData, setRecipeData] = useState([])

    function addToList() {
        let newIngredient = ingredient
        setIngredientsList([...ingredientsList, newIngredient])
    }

    function clearList() {
        setIngredientsList([])
    }

    
    async function searchNewRecipe() {
        let iList = ingredientsList
        let iString = ""
        if (iList.length !== 0) {
            for (let i=0; i < iList.length; i++) {
                if (i === 0) {
                    iString += iList[i]
                }
                else {
                    iString += (",+" + iList[i])
                }
            }
            try {
                const endpoint = 'http://localhost:5000/api/newRecipe';
                const data = {
                ingredients: iString,
                number: 5
                // token: sessionStorage.getItem(token)
                }
                const configs = {
                method: 'POST',
                body: JSON.stringify(data), 
                mode: 'cors',
                headers: {'Content-type' : 'application/json'}
                }
                const res = await fetch(endpoint, configs);
                const json_res = await res.json();
                console.log("raw json: ")
                console.log(json_res)
                setRecipeData(json_res['data']['results'])

                // console.log("hard coded" + json_res['data']['results'])
                console.log(recipeData)
            //   if (json_res.status === "success") {
            //     console.log("success")
            //   } else {
            //     console.log("SQL ERROR")
            //   }
            } catch (err) {
                console.log(err);
            }
      } else {
          console.log("error")
      }
    }

    return(
        <div>
            <h1>NEW RECIPE</h1>
            <label>What's in your fridge? </label>
            <input onChange={(e) => setIngredient(e.target.value)}></input>
            <button onClick={(e) => addToList()}>Enter</button>
            <hr/>
            <p>INGREDIENTS</p>
            <ShowIngredients ingredientsList={ingredientsList}/>
            <button onClick={(e) => searchNewRecipe()}>Search Recipes</button>
            <button onClick={(e) => clearList()}>Clear Ingredients</button>
            <hr/>
            <p>RECIPES</p>
            <ShowRecipes recipeData={recipeData}/>
        </div>
    )
}

export default NewRecipe;