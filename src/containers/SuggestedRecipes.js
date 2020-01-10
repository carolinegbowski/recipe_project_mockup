import React, { useState } from 'react';
import { Heading } from 'rebass';
import ShowSuggestedRecipes from '../components/ShowSuggestedRecipes'

function SuggestedRecipes() {
    const [recipeData, setRecipeData] = useState([])
    

    async function popularRecipes() {
        try {
            const endpoint = 'http://localhost:5000/api/popularRecipes';
            const data = {
            number: 15
            }
            const configs = {
            method: 'POST',
            body: JSON.stringify(data), 
            mode: 'cors',
            headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
            setRecipeData(json_res['data']['recipes'])
        } catch (err) {
            console.log(err);
        }
    }
    if (recipeData.length === 0) {
        popularRecipes()
    }

    return(
        <div>
            <Heading color={'#894532'} fontFamily={'Rubik'} fontWeight={'700'} fontSize={'35px'} my={'50px'} >SUGGESTED RECIPES</Heading>
            <ShowSuggestedRecipes recipeData={recipeData}/>
        </div>
    )
}

export default SuggestedRecipes;