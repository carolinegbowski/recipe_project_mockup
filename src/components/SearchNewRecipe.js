import React from 'react';
import ShowIngredients from './ShowIngredients';
import ShowRecipes from './ShowRecipes';

function SearchNewRecipe(props) {
    let iList = props.ingredientsList
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
    }

    const getRecipes = async (iString) => {
        try {
          const endpoint = 'http://localhost:5000//api/newRecipe';
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
          console.log(json_res)
        //   if (json_res.status === "success") {
        //     console.log("success")
        //   } else {
        //     console.log("SQL ERROR")
        //   }
        } catch (err) {
           console.log(err);
        }
    }
    return (
        // <div>
        //     {getRecipes}
        // </div>
    
    <ShowRecipes recipeData={getRecipes}/>
    )
}

export default SearchNewRecipe;