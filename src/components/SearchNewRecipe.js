import React from 'react';
import ShowIngredients from './ShowIngredients';

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
    console.log(iString)
// need to use API call here & return summary of results 
// Title, Image, 
// can either send request to flask... flask sends request to API
// OR can 
    return (
        <div></div>
    )
}

export default SearchNewRecipe;