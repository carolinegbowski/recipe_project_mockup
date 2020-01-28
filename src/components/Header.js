import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Flex, Box, Image } from 'rebass';
// import Link from './StyledLink';
import UserLogo2 from '../files/UserLogo2.png';
import Logo2 from '../files/Logo2.png';


const Header = () => {
    return( 
        <div>
            <div class="header-bar">
                <Flex justifyContent={'center'} py={'30px'}>
                    <Image width={1/30} src={Logo2}/>
                    <Box width={1/7}></Box>
                    <Heading fontSize={'28px'} fontFamily={'Futura'} letterSpacing={'3px'} fontWeight={'bold'} color={'#FD9185'} width={3/7}>G R A P E F R U I T</Heading>
                    <Box width={1/7}></Box>
                    <Image width={1/30} src={UserLogo2}/>
                </Flex>
            </div>
            <div class="links">
                <Link to='/home'>HOME</Link>
                {/* <Link to='/myAccount'>MY ACCOUNT</Link> */}
                <Link to='/newRecipe'>NEW RECIPE</Link>
                <Link to='/myRecipes'>MY RECIPES</Link>
                <Link to='/suggestedRecipes'>POPULAR RECIPES</Link>
            </div>
        </div>
    )
}

export default Header;