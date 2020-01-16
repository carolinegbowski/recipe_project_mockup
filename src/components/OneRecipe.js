import React, {useState} from 'react';
import { Heading, Card, Button, Box, Image } from 'rebass';
import Modal from 'react-modal';

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
    


    async function saveRecipe() {
        let accountID = sessionStorage.getItem("id")
        try {
            const endpoint = 'http://localhost:5000/api/saveRecipe';
            const data = {
                recipeID : props.recipeID, 
                title : props.recipeTitle, 
                image : props.recipeImage, 
                accountID : accountID
            }
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

    return(
        <div>
            <Card sx={{
                backgroundColor: 'white',
                px: '50px',
                py: '30px',
                borderRadius: 4
            }} backgroundColor={'white'} px={'50px'} py={'30px'}> 
                <Heading>{ props.recipeTitle }</Heading>
                <Image sx={{
                    py: '30px',
                    borderRadius: 6,
                    }} src={ props.recipeImage }></Image>
                <Box>
                    
                    <Card textAlign={'left'} contentAlign={'center'}>
                        <Heading textAlign={'center'}>Ingredients</Heading>
                        <Box width={'200px'} contentAlign={'center'}>
                            <p>{ingredients}</p>
                        </Box>
                    </Card>
                    <Card textAlign={'left'}>
                        <Heading textAlign={'center'}>Instructions</Heading>
                        <p>{instructions}</p>
                    </Card>
                    <Button contentAlign={'center'} mx={'10px'} my={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=>saveRecipe()}>Save Recipe</Button>
                    <Button contentAlign={'center'} mx={'10px'} my={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> props.setCurrentRecipeID('')} >Go Back</Button>
                </Box>

            </Card>
            
            

        </div>
    )
}

export default OneRecipe;