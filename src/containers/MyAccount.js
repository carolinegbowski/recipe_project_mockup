import React from 'react';
import { Heading } from 'rebass';

function MyAccount() {
    return(
        <div>
            <Heading color={'#894532'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'35px'} mt={'50px'} mb={'50px'} letterSpacing={'3px'} >MY ACCOUNT</Heading>
            <p>Name: </p>
            <p>Username: </p>
            <p>Password: ******</p>
        </div>
    )
}

export default MyAccount;

