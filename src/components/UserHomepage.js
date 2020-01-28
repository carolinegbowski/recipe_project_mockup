import React from 'react';
import { Heading, Flex, Box, Card, Image} from 'rebass';
import Grapefruit from '../files/Grapefruit.jpg'

function UserHomepage() {
    return(
        <div>
            <Heading position={'absolute'} color={'white'} backgroundColor={'#FD9185'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'150px'} pt={'100px'} letterSpacing={'3px'}>W E L C O M E</Heading>
            <Image src={Grapefruit} position={'relative'}/>
            
        </div>
    )
}

export default UserHomepage;