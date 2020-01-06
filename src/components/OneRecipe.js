import React, {useState} from 'react';

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

    // async function getInstructions() {
    //     try {
    //         const endpoint = 'http://localhost:5000/api/getInstructions';
    //         const data = {id : props.recipeID}
    //         const configs = {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             mode: 'cors',
    //             headers: {'Content-type' : 'application/json'}
    //         }
    //         const res = await fetch(endpoint, configs);
    //         const json_res = await res.json();
    //         setMyInstructionsResponse(json_res)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // let instructions
    // if (myInstructionsResponse.hasOwnProperty("data")) {
    //     let myInstructions= myInstructionsResponse["data"]["steps"]
    //     instructions = myInstructions.map((responseDict) => (
    //         <p>{responseDict.number} {responseDict.step} </p>
    //     ))
    // } else {
    //     instructions = <p>Loading</p>
    //     getInstructions()
    // }

    // const [myInstructionsResponse, setMyInstructionsResponse] = useState({})

    // async function getInstructions() {
    //     try {
    //         const endpoint = 'http://localhost:5000/api/getInstructions';
    //         const data = {id : props.recipeID}
    //         const configs = {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             mode: 'cors',
    //             headers: {'Content-type' : 'application/json'}
    //         }
    //         const res = await fetch(endpoint, configs);
    //         const json_res = await res.json();
    //         setMyInstructionsResponse(json_res)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // let instructions
    // if (myInstructionsResponse.hasOwnProperty("data")) {
    //     let myInstructions = myInstructionsResponse["data"]["steps"]
    //     instructions = myInstructions.map((responseDict) => (
    //         <li>{responseDict.number} {responseDict.step} </li>
    //     ))
    // } else {
    //     instructions = <p>Loading</p>
    //     getInstructions()
    // }
    
    return(
        <div>
            <p>Ingredients: </p>
            <p>{ingredients}</p>
            <p>Instructions: </p>
            <p>{instructions}</p>

        </div>
    )
}

export default OneRecipe;