import React, { useState } from 'react';
import { Heading } from 'rebass';
import ShowMyRecipes from '../components/ShowMyRecipes';

function MyRecipes() {
    const [recipeData, setRecipeData] = useState([])
    let id = sessionStorage.getItem('id')
    console.log("Id = " + id)

    let errorNote
    async function getMyRecipes(id) {
        if (id) {
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
                setRecipeData(json_res['data'])
            } catch (err) {
                console.log(err);
            }
        } else {
            errorNote = "Error! Please log in on the Home page to access your recipes."
        }
    }

    if (recipeData.length === 0) { 
        getMyRecipes(id)
        console.log("My Recipes " + recipeData)
    }

    return(
        <div>
            <Heading color={'#894532'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'35px'} mt={'50px'} mb={'50px'} letterSpacing={'3px'}>MY RECIPES</Heading>
            { errorNote ? <p>  { errorNote }  </p> : <ShowMyRecipes recipeData={recipeData}/> }
        </div>
    )
}

export default MyRecipes;