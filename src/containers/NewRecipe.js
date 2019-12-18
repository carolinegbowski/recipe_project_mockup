import React, { useState } from 'react';
import ShowIngredients from '../components/ShowIngredients';
import SearchNewRecipe from '../components/SearchNewRecipe';

function NewRecipe() {
    const [ingredient, setIngredient] = useState('')
    const [ingredientsList, setIngredientsList] = useState([])

    function addToList() {
        let newIngredient = ingredient
        setIngredientsList([...ingredientsList, newIngredient])
    }

    function clearList() {
        setIngredientsList([])
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
            <button>Search Recipes</button>
            <button onClick={(e) => clearList()}>Clear Ingredients</button>
            <hr/>
            <p>RECIPES</p>
            <SearchNewRecipe ingredientsList={ingredientsList}/>
            <p>will populate from API (search recipes onClick)</p>
            <p>Photo : Recipe</p>
            <p>Photo : Recipe</p>
            <p>Photo : Recipe</p>
            <p>Photo : Recipe</p>


        </div>
    )
}

export default NewRecipe;