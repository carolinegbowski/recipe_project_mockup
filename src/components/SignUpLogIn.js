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
            <Heading position={'absolute'} color={'white'} backgroundColor={'#FD9185'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'100px'} p={'100px'} letterSpacing={'3px'}>W E L C O M E</Heading>
            {newUser ? loginPage 
            :
            <div>
            <Button fontFamily={'futura'} fontWeight={'lighter'} width={'100px'} m={'10px'} backgroundColor={'#FD9185'} color={'white'} onClick={(e)=> setNewUser('existing')}>LOG IN</Button>
            <Button fontFamily={'futura'} fontWeight={'lighter'} width={'100px'} m={'10px'} backgroundColor={'#FD9185'} color={'white'} onClick={(e)=> setNewUser('new')}>SIGN UP</Button>
            </div>
            }
        </div>
    )
}

export default SignUpLogIn;