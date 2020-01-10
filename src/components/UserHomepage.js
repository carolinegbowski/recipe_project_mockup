import React from 'react';
import { Heading, Flex, Box, Card } from 'rebass';

function UserHomepage() {
    return(
        <div>
            <Heading color={'#894532'} fontFamily={'Rubik'} fontWeight={'700'} fontSize={'35px'} my={'50px'}>WELCOME BACK</Heading>
            <Flex alignContent={'center'} textAlign={'center'}>
                <Card width={1/3} backgroundColor={'#dd9086'} color={'white'}>
                    <Heading fontFamily={'Roboto'} fontSize={'30px'} pt={'100px'} mt={'20px'} mb={'0px'}>My</Heading>
                    <Heading fontFamily={'Roboto'} fontSize={'30px'} pb={'100px'} mt={'0px'} mb={'20px'}>Recipes</Heading>
                </Card>
                <Card width={1/3} backgroundColor={'white'} color={'#894532'}>
                    <Heading fontFamily={'Roboto'} fontSize={'30px'} pt={'100px'} mt={'20px'} mb={'0px'}>New</Heading>
                    <Heading fontFamily={'Roboto'} fontSize={'30px'} pb={'100px'} mt={'0px'} mb={'20px'}>Recipe</Heading>
                </Card>
                <Card width={1/3} backgroundColor={'#894532'} color={'#dd9086'}>
                    <Heading fontFamily={'Roboto'} fontSize={'30px'} pt={'100px'} mt={'20px'} mb={'0px'}>Suggested</Heading>
                    <Heading fontFamily={'Roboto'} fontSize={'30px'} pb={'100px'} mt={'0px'} mb={'20px'}>Recipes</Heading>
                </Card>
            </Flex>
            <p>Some recipe news? </p>
            <p>Some suggested recipes?</p>
        </div>
    )
}

export default UserHomepage;