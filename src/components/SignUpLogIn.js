import React, { useState } from 'react';
import { Heading, Button } from 'rebass';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';

function SignUpLogIn(props) {
    const [newUser, setNewUser] = useState('')

    let loginPage
    if (newUser === 'new') {
        loginPage = <SignUp setToken={props.setToken}/>
    }
    if (newUser === 'existing') {
        loginPage = <LogIn setToken={props.setToken}/>
    }

    return(
        <div>
            <Heading color={'#894532'} fontFamily={'Rubik'} fontWeight={'700'} fontSize={'35px'} my={'50px'} >WELCOME</Heading>
            {newUser ? loginPage 
            :
            <div>
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> setNewUser('existing')}>Log In</Button>
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> setNewUser('new')}>Sign Up</Button>
            </div>
            }
        </div>
    )
}

export default SignUpLogIn;