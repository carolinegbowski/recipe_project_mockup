import React, { useState } from 'react';
import ShowIngredients from '../components/ShowIngredients';
import SearchNewRecipe from '../components/SearchNewRecipe';
import ShowRecipes from '../components/ShowRecipes';
import { Heading, Flex, Box, Card, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';

function NewRecipe() {
    const [ingredient, setIngredient] = useState('')
    const [ingredientsList, setIngredientsList] = useState([])
    const [recipeData, setRecipeData] = useState([])

    function addToList() {
        let newIngredient = ingredient
        setIngredientsList([...ingredientsList, newIngredient])
    }

    function clearList() {
        setIngredientsList([])
    }

    
    async function searchNewRecipe() {
        let iList = ingredientsList
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
            try {
                const endpoint = 'http://localhost:5000/api/newRecipe';
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
                console.log("raw json: ")
                console.log(json_res)
                setRecipeData(json_res['data']['results'])

                // console.log("hard coded" + json_res['data']['results'])
                console.log(recipeData)
            //   if (json_res.status === "success") {
            //     console.log("success")
            //   } else {
            //     console.log("SQL ERROR")
            //   }
            } catch (err) {
                console.log(err);
            }
      } else {
          console.log("error")
      }
    }

    return(
        <div>
            <Heading mb={'20px'}>NEW RECIPE</Heading>
            <label>What's in your fridge? </label>
            <Flex>
                <Box width={3/7}></Box>
                <Input mt={'10px'}width={1/7} onChange={(e) => setIngredient(e.target.value)}></Input>
                <Box width={3/7}></Box>
            </Flex>
            <Button my={'10px'} backgroundColor={'blue'} color={'white'} onClick={(e) => addToList()}>Enter</Button>
            <Flex>
                <Box width={1/17}></Box>
                <Card width={7/17}>
                    <Heading my={'20px'}>Ingredients</Heading>
                    <ShowIngredients ingredientsList={ingredientsList}/>
                    <Button m={'10px'} backgroundColor={'blue'} color={'white'} onClick={(e) => searchNewRecipe()}>Search Recipes</Button>
                    <Button m={'10px'} backgroundColor={'blue'} color={'white'} onClick={(e) => clearList()}>Clear Ingredients</Button>
                </Card>
                <Box width={1/17}></Box>
                <Card width= {7/17}>
                    <Heading my={'20px'}>Recipes</Heading>
                    <ShowRecipes recipeData={recipeData}/>
                </Card>
                <Box width={1/17}></Box>
            </Flex>
        </div>
    )
}

export default NewRecipe;