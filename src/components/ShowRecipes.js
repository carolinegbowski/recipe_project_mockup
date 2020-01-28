import React, {useState} from 'react';
import OneRecipe from './OneRecipe';
import {Flex, Box, Image, Card } from 'rebass';
import PopupRecipe from './PopupRecipe';

function ShowRecipes(props) { 
    const [currentRecipeID, setCurrentRecipeID] = useState('')
    const [currentRecipeTitle, setCurrentRecipeTitle] = useState('')
    const [currentRecipeImage, setCurrentRecipeImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [from, setFrom] = useState('recipes')
    
    let recipes

    function setCurrentRecipeData(id, title, image) {
        setCurrentRecipeID(String(id))
        setCurrentRecipeTitle(title)
        setCurrentRecipeImage(image)
        setIsOpen(true)
    }

    if (props.recipeData.length > 0) {
        recipes = props.recipeData.map(recipeDict =>( 
            // <p key={recipeDict.id}><img onClick={(e)=> setCurrentRecipeID(String(recipeDict.id))} src={recipeDict.image}/> <p>{recipeDict.title}</p></p>
            <Card sx={{
                justifyContent: "center",
                contentAlign: "center",
                p: '10px',
                m: '10px',
                fontFamily: 'futura',
                backgroundColor: 'white',
                color: '#FD9185',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
            }}>
                <Card sx={{ justifyContent: 'center', contetnAlign: 'center', backgroundColor: '#FD9185', p: '1px'}}>
                    <Card sx={{ justifyContent: 'center', contentAlign: 'center', backgroundColor: 'white', color: '#FD9185', padding: '5px'}}>
                        <Flex key={recipeDict.id} >
                        <Image width={1/3} m={'10px'} onClick={(e)=>setCurrentRecipeData(recipeDict.id, recipeDict.title, recipeDict.image)} src={recipeDict.image}></Image>
                        <Card width={3/4} textAlign={'center'}>
                            <p>{recipeDict.title}</p>
                        </Card>
                        </Flex>
                    </Card>
                </Card>
                
            </Card>
        ))
    }
    
    
    // <Card sx={{
    //     justifyContent: "center",
    //     contentAlign: "center",
    //     p : "10px",
    //     m : "10px",
    //     width: "1/5",
    //     minHeight: '300px',
    //     fontFamily: 'futura',
    //     backgroundColor: 'white',
    //     color: '#FD9185',
    //     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
    // }}px={'10px'} width={1/5}



    return(
        <div>
            {/* {currentRecipeID ? <OneRecipe setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage}/> 
            : <Flex justifyContent={'center'} flexDirection={'column'}>
                {recipes}
            </Flex>
            } */}
            <Flex justifyContent={'center'} flexDirection={'column'}>
                {recipes}
            </Flex>
            <PopupRecipe from={from} isOpen={isOpen} setIsOpen={setIsOpen} setCurrentRecipeID={setCurrentRecipeID} recipeID={currentRecipeID} recipeTitle={currentRecipeTitle} recipeImage={currentRecipeImage} onClose={(e) => setIsOpen(false)}>
            </PopupRecipe>
        </div>
    )
}

export default ShowRecipes;