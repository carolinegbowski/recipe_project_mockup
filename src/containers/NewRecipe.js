import React, { useState } from 'react';
import ShowIngredients from '../components/ShowIngredients';

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
            <label>Enter Ingredients:</label>
            <input onChange={(e) => setIngredient(e.target.value)}></input>
            <button onClick={(e) => addToList()}>Enter</button>
            <hr/>
            <p>Ingredients</p>
            <ShowIngredients ingredientsList={ingredientsList}/>
            <hr/>
            <p>RECIPES</p>
            <p>Photo : Recipe</p>
            <p>Photo : Recipe</p>
            <p>Photo : Recipe</p>
            <p>Photo : Recipe</p>


        </div>
    )
}

export default NewRecipe;