import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Flex, Box } from 'rebass';
// import Link from './StyledLink';


const Header = () => {
    return( 
        <div>
            <div class="header-bar">
                <Flex py={'30px'}>
                    <Heading fontSize={'14px'} fontFamily={'Roboto'} color={'#DD9086'} width={1/7}>LOGO</Heading>
                    <Box width={1/7}></Box>
                    <Heading fontFamily={'Roboto'} fontWeight={'bold'} color={'#DD9086'} width={3/7}>M A R S H M A L L O W</Heading>
                    <Box width={1/7}></Box>
                    <Heading fontSize={'14px'} fontFamily={'Roboto'} color={'#DD9086'} width={1/7}>USER LOGO</Heading>
                </Flex>
            </div>
            <div class="links">
                <Link to='/home'>HOME</Link>
                <Link to='/myAccount'>MY ACCOUNT</Link>
                <Link to='/myRecipes'>MY RECIPES</Link>
                <Link to='/newRecipe'>NEW RECIPE</Link>
                <Link to='/suggestedRecipes'>SUGGESTED RECIPES</Link>
            </div>
        </div>
    )
}

export default Header;