import React from 'react';
import { Heading } from 'rebass';

function MyAccount() {
    return(
        <div>
            <Heading color={'#894532'} fontFamily={'Rubik'} fontWeight={'700'} fontSize={'35px'} my={'50px'} >MY ACCOUNT</Heading>
            <p>Name: </p>
            <p>Username: </p>
            <p>Password: ******</p>
        </div>
    )
}

export default MyAccount;