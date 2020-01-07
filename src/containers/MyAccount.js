import React from 'react';
import { Heading } from 'rebass';

function MyAccount() {
    return(
        <div>
            <Heading fontFamily={'Roboto'} fontSize={'50px'} mt={'20px'} >MY ACCOUNT</Heading>
            <p>Name: </p>
            <p>Username: </p>
            <p>Password: ******</p>
        </div>
    )
}

export default MyAccount;