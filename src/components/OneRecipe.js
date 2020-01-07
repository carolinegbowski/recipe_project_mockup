import React, {useState} from 'react';
import { Heading, Card, Button } from 'rebass';

function OneRecipe(props) {
    const [myIngredientsResponse, setMyIngredientsResponse] = useState({})
    const [myInstructionsResponse, setMyInstructionsResponse] = useState({})


    async function getIngredients() {
        try {
            const endpoint = 'http://localhost:5000/api/getIngredients';
            const data = {id : props.recipeID}
            const configs = {
                method: 'POST',
                body: JSON.stringify(data),
                mode: 'cors',
                headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
            setMyIngredientsResponse(json_res)
        } catch (err) {
            console.log(err)
        }
    }

    let ingredients
    if (myIngredientsResponse.hasOwnProperty("data")) {
        let myIngredients = myIngredientsResponse["data"]["ingredients"]
        ingredients = myIngredients.map((responseDict) => (
            <li>{responseDict.amount.us.value} {responseDict.amount.us.unit} {responseDict.name} </li>
        ))
    } else {
        ingredients = <p>Loading</p>
        getIngredients()
    }

    async function getInstructions() {
        try {
            const endpoint = 'http://localhost:5000/api/getInstructions';
            const data = {id : props.recipeID}
            const configs = {
                method: 'POST',
                body: JSON.stringify(data),
                mode: 'cors',
                headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
            setMyInstructionsResponse(json_res)
        } catch (err) {
            console.log(err)
        }
    }

    let instructions
    if (myInstructionsResponse.hasOwnProperty("data")) {
        let myInstructions = myInstructionsResponse["data"][0]["steps"]
        instructions = myInstructions.map((responseDict) => (
            <p> {responseDict.number}. {responseDict.step} </p>
        ))
    } else {
        instructions = <p>Loading</p>
        getInstructions()
    }
    
    return(
        <div>
            <p>{props.recipeImage}</p>
            <Card>
                <Heading>Ingredients</Heading>
                <p>{ingredients}</p>
            </Card>
            <Card>
                <Heading>Instructions:</Heading>
                <p>{instructions}</p>
            </Card>
            <Button my={'10px'} backgroundColor={'#DD9086'} color={'white'}>Save Recipe</Button>

        </div>
    )
}

export default OneRecipe;