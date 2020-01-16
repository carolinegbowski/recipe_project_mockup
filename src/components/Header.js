import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Flex, Box, Image } from 'rebass';
// import Link from './StyledLink';
import UserLogo from '../files/UserLogo.png';
import Logo from '../files/Logo.png';


const Header = () => {
    return( 
        <div>
            <div class="header-bar">
                <Flex justifyContent={'center'} py={'30px'}>
                    <Image width={1/30} src={Logo}/>
                    <Box width={1/7}></Box>
                    <Heading fontFamily={'Roboto'} fontWeight={'bold'} color={'#DD9086'} width={3/7}>G R A P E F R U I T</Heading>
                    <Box width={1/7}></Box>
                    <Image width={1/30} src={UserLogo}/>
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