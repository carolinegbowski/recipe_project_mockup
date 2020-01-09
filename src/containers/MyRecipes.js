import React, { useState } from 'react';
import { Heading } from 'rebass';
import ShowMyRecipes from '../components/ShowMyRecipes';

function MyRecipes() {
    const [recipeData, setRecipeData] = useState([])


    async function getMyRecipes() {
        let id = sessionStorage.getItem('id')
        try {
            const endpoint = 'http://localhost:5000/api/myRecipes';
            const data = {
                id: id
            }
            const configs = {
            method: 'POST',
            body: JSON.stringify(data), 
            mode: 'cors',
            headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
            setRecipeData(json_res)
        } catch (err) {
            console.log(err);
        }
    }

    if (recipeData.length === 0) {
        getMyRecipes()
    }
    

    return(
        <div>
            <Heading fontFamily={'Roboto'} fontSize={'50px'} mt={'20px'}>MY RECIPES</Heading>
            <ShowMyRecipes recipeData={recipeData}/>
        </div>
    )
}

export default MyRecipes;