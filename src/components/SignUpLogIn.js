import React, { useState } from 'react';
import { Heading, Button } from 'rebass';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';

function SignUpLogIn(props) {
    const [newUser, setNewUser] = useState(true)

    return(
        <div>
            <Heading fontFamily={'Roboto'} fontSize={'50px'} mt={'20px'} >WELCOME</Heading>
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> setNewUser(true)}>Sign Up</Button>
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> setNewUser(false)}>Log In</Button>
            {newUser ? <SignUp setNewUser={setNewUser}/> : <LogIn setToken={props.setToken}/>}
        </div>
    )
}

export default SignUpLogIn;