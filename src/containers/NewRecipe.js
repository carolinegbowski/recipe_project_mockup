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
            } catch (err) {
                console.log(err);
            }
      } else {
          console.log("error")
      }
    }

    return(
        <div>
            <Heading color={'#894532'} fontFamily={'Rubik'} fontWeight={'700'} fontSize={'35px'} mt={'50px'} mb={'50px'}>NEW RECIPE</Heading>
            <label>What's in your fridge? </label>
            <Flex>
                <Box width={2/7}></Box>
                <Input textAlign={'center'} mt={'10px'} width={3/7} onChange={(e) => setIngredient(e.target.value)}></Input>
                <Box width={2/7}></Box>
            </Flex>
            <Button fontFamily={'Roboto'} mt={'10px'} mb={'50px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e) => addToList()}>Enter Ingredient</Button>
            <Flex>
                <Box width={1/17}></Box>
                <Card width={7/17}>
                    <Heading fontFamily={'Rubik'} fontWeight={'500'} my={'20px'}>INGREDIENTS</Heading>
                    <ShowIngredients ingredientsList={ingredientsList}/>
                    <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e) => searchNewRecipe()}>Search</Button>
                    <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e) => clearList()}>Clear</Button>
                </Card>
                <Box width={1/17}></Box>
                <Card width= {7/17}>
                    <Heading fontFamily={'Rubik'} fontWeight={'500'} my={'20px'}>RECIPES</Heading>
                    <ShowRecipes recipeData={recipeData}/>
                </Card>
                <Box width={1/17}></Box>
            </Flex>
        </div>
    )
}

export default NewRecipe;