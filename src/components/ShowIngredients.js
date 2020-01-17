import React from 'react';
import { Card, Flex } from 'rebass';

function ShowIngredients(props) {
    let iList = props.ingredientsList
    const myIngredients = iList.map((ingredient, idx) => (
        <li key={idx}> {ingredient} </li>
    ))
    return (
        <div>
            <Flex justifyContent={'center'}>
                <Card maxWidth={'200px'} minHeight={'20px'} textAlign={'left'} justifyContent={'left'}>
                    { myIngredients }
                </Card>
            </Flex>
           
            
        </div>
    )
}

export default ShowIngredients;