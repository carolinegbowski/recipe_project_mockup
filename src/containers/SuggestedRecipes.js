import React from 'react';
import { Heading } from 'rebass';

function SuggestedRecipes() {
    

    // async function popularRecipes() {
    //     try {
    //         const endpoint = 'http://localhost:5000/api/popularRecipes';
    //         const data = {
    //         // ingredients: iString,
    //         // number: 5
    //         }
    //         const configs = {
    //         method: 'POST',
    //         body: JSON.stringify(data), 
    //         mode: 'cors',
    //         headers: {'Content-type' : 'application/json'}
    //         }
    //         const res = await fetch(endpoint, configs);
    //         const json_res = await res.json();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    return(
        <div>
            <Heading fontFamily={'Roboto'} fontSize={'50px'} mt={'20px'} >SUGGESTED RECIPES</Heading>
            <p>Photo : Random Recipe</p>
            <p>Photo : Random Recipe</p>
            <p>Photo : Random Recipe</p>
            <p>Photo : Random Recipe</p>
        </div>
    )
}

export default SuggestedRecipes;