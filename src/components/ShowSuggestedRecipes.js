import React, { useState } from 'react';
import { Card, Image, Heading, Flex, Box} from 'rebass';
import OneRecipe from './OneRecipe';
import PopupRecipe from './PopupRecipe';

function ShowSuggestedRecipes(props) {
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    const [currentRecipeTitle, setCurrentRecipeTitle] = useState('')
    const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    
    function SetCurrentRecipeData(id, title, image) {
        setCurrentRecipeID(id)
        setCurrentRecipeTitle(title)
        setCurrentRecipeImage(image)
        setIsOpen(true)
    }
    
    console.log(props.recipeData)

    let recipes
    if (props.recipeData.length > 0) {
        recipes = props.recipeData.map(recipeDict => (
            <Card sx={{
                justifyContent: "center",
                contentAlign: "center",
                p : "10px",
                m : "10px",
                width: "1/5",
                height: '350px',
                fontFamily: 'futura',
                backgroundColor: 'white',
                color: '#FD9185',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
            }}px={'10px'} width={1/5} key={recipeDict.id}>
                <Card sx={{ 
                    justifyContent: 'center', 
                    contetnAlign: 'center', 
                    backgroundColor: '#FD9185', 
                    p: '1px', 
                    height: '330px'
                    }}>
                    <Card sx={{
                        backgroundColor: 'white', 
                        color: '#FD9185', 
                        padding: '5px', 
                        height: '328px'
                        }}>
                        <Image p={'5px'} src={recipeDict.image} onClick={(e) => SetCurrentRecipeData(recipeDict.id, recipeDict.title, recipeDict.image)}/>
                        <p class='recipe-titles'>{ recipeDict.title }</p>
                    </Card>
                </Card>
            </Card>
        ))
    }
    
    return (
        <div>
            {/* { currentRecipeID ? 
                (<Flex contentAlign={'center'}>
                    <Card contentAlign={'center'} width={2/7}>
                        <OneRecipe setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage}/>
                    </Card>
                </Flex>)
                : <p></p>
            } */}

            <Flex flexWrap="wrap" justifyContent={'center'}>
                { recipes } 
            </Flex>
            <PopupRecipe isOpen={isOpen} setIsOpen={setIsOpen} setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage} onClose={(e) => setIsOpen(false)}>
                <OneRecipe setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage}/>   
            </PopupRecipe>
        </div>
    )
}

export default ShowSuggestedRecipes;
