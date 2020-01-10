import React, {useState} from 'react';
import OneRecipe from './OneRecipe';
import {Flex, Box, Image, Card } from 'rebass';

function ShowRecipes(props) { 
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    const [currentRecipeTitle, setCurrentRecipeTitle] = useState('')
    const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    // const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    
    let recipes = <p>Unable to load recipe data</p>

    function setCurrentRecipeData(id, title, image) {
        setCurrentRecipeID(String(id))
        setCurrentRecipeTitle(title)
        setCurrentRecipeImage(image)
    }

    if (props.recipeData.length > 0) {
        recipes = props.recipeData.map(recipeDict =>( 
            // <p key={recipeDict.id}><img onClick={(e)=> setCurrentRecipeID(String(recipeDict.id))} src={recipeDict.image}/> <p>{recipeDict.title}</p></p>
            <Card sx={{
                m: '10px',
                p: '2px',
                borderRadius: 4,
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
            }}>
                <Flex key={recipeDict.id} >
                <Image sx={{
                    borderRadius: 4,
                }}
                width={1/4} m={'10px'} onClick={(e)=>setCurrentRecipeData(recipeDict.id, recipeDict.title, recipeDict.image)} src={recipeDict.image}></Image>
                <p width={3/4} m={'10px'}>{recipeDict.title}</p>
                    
                </Flex>
            </Card>
        ))
    }
    
    
    return(
        <div>
            {currentRecipeID ? <OneRecipe setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage}/> 
            : <Flex justifyContent={'center'} flexDirection={'column'}>
                {recipes}
            </Flex>
            }

        </div>
    )
}

export default ShowRecipes;