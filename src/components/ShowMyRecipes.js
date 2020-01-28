import React, { useState } from 'react';
import { Flex, Card, Image } from 'rebass';
import PopupRecipe from './PopupRecipe';

function ShowMyRecipes(props) {
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    const [currentRecipeTitle, setCurrentRecipeTitle] = useState('')
    const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [from, setFrom] = useState('myRecipes')

    
    function SetCurrentRecipeData(id, title, image) {
        setCurrentRecipeID(id)
        setCurrentRecipeTitle(title)
        setCurrentRecipeImage(image)
        setIsOpen(true)
    }

    console.log("ShowMyRecipes recipeData " + props.recipeData)
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

    return(
        <div>
        <Flex flexWrap="wrap" justifyContent={'center'}>
            { recipes } 
        </Flex>
        <PopupRecipe from={from} isOpen={isOpen} setIsOpen={setIsOpen} setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage} onClose={(e) => setIsOpen(false)}>
        </PopupRecipe>
        </div>
    )
}

export default ShowMyRecipes;