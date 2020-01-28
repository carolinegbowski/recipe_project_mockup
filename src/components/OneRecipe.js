import React, {useState} from 'react';
import { Heading, Card, Button, Box, Image } from 'rebass';

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

    async function unsaveRecipe() {
        let accountID = sessionStorage.getItem("id")
        try {
            const endpoint = 'http://localhost:5000/api/unsaveRecipe';
            const data = {
                recipeID : props.recipeID,
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

    // find a way to conditionally render save button OR unsave button to remove from saved recipes

    const buttonStyles = {
        fontFamily: 'futura',
        fontWeight: 'lighter',
        width: '115 px',
        margin: '20px',
        px: '20px',
        backgroundColor: 'white',
        color: '#FD9185',
        borderStyle: 'solid',
        borderColor: '#FD9185',
        borderWidth: '2px',
        borderRadius: '0px',
        outlineColor: '#FD9185'
    }
    
    let myButton
    if (props.from === 'popularRecipes') {
        myButton = <Button style={buttonStyles} width={'140px'} onClick={(e)=>saveRecipe()}>Save Recipe</Button>
    }
    if (props.from === 'myRecipes') {
        myButton = <Button style={buttonStyles} width={'140px'} onClick={(e)=>unsaveRecipe()}>Unsave Recipe</Button>
    }

    return(
        <div>
            <Card sx={{
                justifyContent: "center",
                width: '600px',
                contentAlign: "center",
                p: '15px',
                backgroundColor: 'white',
                color: '#FD9185',
                // boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
            }}> 
                <Card sx={{ 
                    justifyContent: 'center', 
                    contetnAlign: 'center', 
                    backgroundColor: '#FD9185', 
                    px: '1px',
                    py: '1px'
                    }}> 
                    <Card sx={{
                        backgroundColor: 'white', 
                        color: '#FD9185', 
                        padding: '5px'
                        }}>
                        <Heading fontFamily={'futura'} fontWeight={'lighter'} mt={'10px'} mx={'40px'} >{ props.recipeTitle }</Heading>
                        <Image p={'30px'} src={ props.recipeImage }></Image>
                        <Box>
                            <Card textAlign={'left'} contentAlign={'center'} mx={'40px'}>
                                <Heading fontFamily={'futura'} fontWeight={'lighter'} letterSpacing={'3px'} textAlign={'center'}>INGREDIENTS</Heading>
                                <Box width={'200px'} contentAlign={'center'}>
                                    <p>{ingredients}</p>
                                </Box>
                            </Card>
                            <Card textAlign={'left'} mx={'40px'}>
                                <Heading fontFamily={'futura'} fontWeight={'lighter'} letterSpacing={'3px'} textAlign={'center'} >INSTRUCTIONS</Heading>
                                <p>{instructions}</p>
                            </Card>
                            {myButton}
                        </Box>
                    </Card>
                </Card> 
            </Card>
        </div>
    )
}

export default OneRecipe;