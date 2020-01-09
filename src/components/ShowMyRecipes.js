import React, { useState } from 'react';
import { Flex, Card, Image } from 'rebass';
import OneRecipe from './OneRecipe';

function ShowMyRecipes(props) {
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    const [currentRecipeTitle, setCurrentRecipeTitle] = useState('')
    
    function SetCurrentRecipeData(id, title, image) {
        setCurrentRecipeID(id)
        setCurrentRecipeTitle(title)
        setCurrentRecipeImage(image)
    }

    console.log(props.recipeData)

    // let recipes
    // if (props.recipeData.length > 0) {
    //     recipes = props.recipeData.map(recipeDict => (
    //         <Card sx={{
    //             contentAlign: "center",
    //             p : "10px",
    //             m : "10px",
    //             width: "1/5",
    //             boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)',
    //             borderRadius: 4
    //         }}px={'10px'} width={1/5} key={recipeDict.id}>
    //             <Image sx={{
    //                 borderRadius: 4,
    //             }} src={recipeDict.image} onClick={(e) => SetCurrentRecipeData(recipeDict.id, recipeDict.title, recipeDict.image)}/>
    //             <p>{ recipeDict.title }</p>
    //         </Card>
    //     ))
    // }
    

    return(
        <div>
            { currentRecipeID ? 
                (<Flex contentAlign={'center'}>
                    <Card contentAlign={'center'} width={2/7}>
                        <OneRecipe setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage}/>
                    </Card>
                </Flex>)
                : <p></p>
            }

            <p>ShowMyRecipes</p>
        </div>
    )
}

export default ShowMyRecipes;