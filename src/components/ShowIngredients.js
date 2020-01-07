import React from 'react';
import { Card } from 'rebass';

function ShowIngredients(props) {
    let iList = props.ingredientsList
    const myIngredients = iList.map((ingredient, idx) => (
        <li key={idx}> {ingredient} </li>
    ))
    return (
        <div>
            <Card>
                { myIngredients }
            </Card>
            
        </div>
    )
}

export default ShowIngredients;