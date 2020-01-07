import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Flex, Box } from 'rebass';
// import Link from './StyledLink';


const Header = () => {
    return( 
        <div>
            <div class="header-bar">
                <Flex my={'30px'}>
                    <Heading width={1/7}>Logo</Heading>
                    <Box width={2/7}></Box>
                    <Heading width={1/7}>C O M P A N Y</Heading>
                    <Box width={2/7}></Box>
                    <Heading width={1/7}>User Logo</Heading>
                </Flex>
                <hr/>
            </div>
            <div class="links">
                <Link to='/home'>Home</Link>
                <Link to='/myAccount'>My Account</Link>
                <Link to='/myRecipes'>My Recipes</Link>
                <Link to='/newRecipe'>New Recipe</Link>
                <Link to='/suggestedRecipes'>Suggested Recipes</Link>
            </div>
            <hr/>
        </div>
    )
}

export default Header;