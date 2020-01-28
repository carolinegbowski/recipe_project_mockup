import React, { useState } from 'react';
import OneRecipe from './OneRecipe';
import { Flex } from 'rebass';

let popupStyles = {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    padding: '20px',
    position: 'absolute',
    marginTop: '200px',
    top: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    fontFamily: 'futura',
    display: 'flex',
    flexDirection: 'column'
};

let popupCloseButtonStyles = {
    fontSize: '18px',
    marginBottom: '2px',
    cursor: 'pointer',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

const PopupContainer = (props) => {

    let popup = (
        <div style={popupStyles} >
            <button style={popupCloseButtonStyles} onClick={props.onClose}>x</button>
            <Flex contentAlign='center' justifyContent='center' paddingTop='150px'>
                <OneRecipe onClose={props.onClose} setCurrentRecipeID={props.setCurrentRecipeID} recipeID={props.recipeID} recipeTitle={props.recipeTitle} recipeImage={props.recipeImage}/>
            </Flex>
        </div>
    )

    if(! props.isOpen) {
        popup = null;
    }

    return (
        <div>
            {popup}
        </div>
    )
}

export default PopupContainer;