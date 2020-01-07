import React, {useState} from 'react';
import OneRecipe from './OneRecipe';
import {Flex, Box, Image} from 'rebass';

function ShowRecipes(props) { 
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    // const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    
    let recipes = <p>Unable to load recipe data</p>

    if (props.recipeData.length > 0) {
        recipes = props.recipeData.map(recipeDict =>( 
            // <p key={recipeDict.id}><img onClick={(e)=> setCurrentRecipeID(String(recipeDict.id))} src={recipeDict.image}/> <p>{recipeDict.title}</p></p>
            <Flex key={recipeDict.id}>
                <Image width={1/2} m={'10px'} onClick={(e)=>setCurrentRecipeID(String(recipeDict.id))} src={recipeDict.image}></Image>
                <p width={1/2} m={'10px'}>{recipeDict.title}</p>
                    
            </Flex>
        ))
    }
    
    
    return(
        <div>
            {currentRecipeID ? <OneRecipe recipeID={currentRecipeID}/> : recipes}

        </div>
    )
}

export default ShowRecipes;