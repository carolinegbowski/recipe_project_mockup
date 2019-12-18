import React from 'react';

function ShowIngredients(props) {
    let iList = props.ingredientsList
    const myIngredients = iList.map((ingredient) => (
        <li> {ingredient} </li>
    ))
    return (
        <div>
            { myIngredients }
        </div>
    )
}

export default ShowIngredients;