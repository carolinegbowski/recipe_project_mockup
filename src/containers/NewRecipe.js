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
            <Heading color={'white'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'35px'} mt={'50px'} mb={'50px'} letterSpacing={'3px'} >NEW RECIPE</Heading>
            <label>What's in your fridge? </label>
            <Flex>
                <Box width={2/7}></Box>
                <Input textAlign={'center'} mt={'10px'} width={3/7} onChange={(e) => setIngredient(e.target.value)}></Input>
                <Box width={2/7}></Box>
            </Flex>
            <Button fontFamily={'futura'} fontWeight={'lighter'} mt={'10px'} mb={'50px'} backgroundColor={'white'} color={'#FD9185'} onClick={(e) => addToList()}>ENTER INGREDIENT</Button>
            <Flex>
                <Box width={1/17}></Box>
                <Card width={7/17}>
                    <Heading letterSpacing={'3px'} fontFamily={'futura'} fontWeight={'500'} my={'20px'} color={'white'} >INGREDIENTS</Heading>
                    <ShowIngredients ingredientsList={ingredientsList}/>
                    <Button fontFamily={'futura'} fontWeight={'lighter'} width={'100px'} m={'10px'} backgroundColor={'white'} color={'#FD9185'} onClick={(e) => searchNewRecipe()}>SEARCH</Button>
                    <Button fontFamily={'futura'} fontWeight={'lighter'} width={'100px'} m={'10px'} backgroundColor={'white'} color={'#FD9185'} onClick={(e) => clearList()}>CLEAR</Button>
                </Card>
                <Box width={1/17}></Box>
                <Card width= {7/17}>
                    <Heading fontFamily={'futura'} letterSpacing={'3px'} fontWeight={'500'} my={'20px'} color={'white'}>RECIPES</Heading>
                    <ShowRecipes recipeData={recipeData}/>
                </Card>
                <Box width={1/17}></Box>
            </Flex>
        </div>
    )
}

export default NewRecipe;