import React, {useState} from 'react';
import { Heading, Card, Button, Box, Image, Flex } from 'rebass';
import { Input } from '@rebass/forms';

function OneRecipe(props) {
    const [myIngredientsResponse, setMyIngredientsResponse] = useState({})
    const [myInstructionsResponse, setMyInstructionsResponse] = useState({})
    const [metric, setMetric] = useState(false)
    const [scale, setScale] = useState(1)


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
        if (metric === true) {
            ingredients = myIngredients.map((responseDict) => (
                <li>{scale * responseDict.amount.metric.value} {responseDict.amount.metric.unit} {responseDict.name} </li>
            ))
        } else {
            ingredients = myIngredients.map((responseDict) => (
                <li>{scale * responseDict.amount.us.value} {responseDict.amount.us.unit} {responseDict.name} </li>
            ))
        }
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
            // setMyInstructionsResponse(json_res)
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
    const metricButtonStyle = {
        fontFamily: 'futura',
        fontWeight: 'lighter',
        width: '150 px',
        backgroundColor: 'white',
        color: '#FD9185',
        fontSize: '14px',
        borderStyle: 'solid',
        borderColor: '#FD9185',
        borderWidth: '2px',
        borderRadius: '0px',
        outlineColor: '#FD9185'
    }
    
    let myButton
    if (props.from === 'popularRecipes' || 'recipes') {
        myButton = <Button style={buttonStyles} width={'140px'} onClick={(e)=>saveRecipe()}>Save Recipe</Button>
    }
    if (props.from === 'myRecipes') {
        myButton = <Button style={buttonStyles} width={'140px'} onClick={(e)=>unsaveRecipe()}>Unsave Recipe</Button>
    }

    let metricButton
    if (metric === true) {
        metricButton = <Button style={metricButtonStyle} onClick={(e)=>setMetric(false)}>US</Button> 
    } else {
        metricButton = <Button style={metricButtonStyle}  onClick={(e)=>setMetric(true)}>Metric</Button>
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
                                <Flex contentAlign={'center'} justifyContent={'center'} paddingTop={'20px'}>
                                    <Box width={1/2}>
                                        <label>
                                            Scale Recipe: 
                                        <select onChange={(e)=>setScale(e.target.value)}>
                                            <option value="0.25">1/4</option>
                                            <option value="0.3333">1/3</option>
                                            <option value="0.5">1/2</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        </label>
                                    </Box>
                                    
                                    { metricButton }
                                </Flex>
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