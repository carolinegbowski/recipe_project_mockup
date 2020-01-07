import React, {useState} from 'react';
import { Heading, Button } from 'rebass';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

function Home() {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [newUser, setNewUser] = useState(true)


    return(
        <div>
            {/* {loggedIn ? <UserHomePage/> : <SignUpLogIn/>} */}
            <Heading fontFamily={'Roboto'} fontSize={'50px'} mt={'20px'} >WELCOME</Heading>
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> setNewUser(true)}>Sign Up</Button>
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=> setNewUser(false)}>Log In</Button>
            {newUser ? <SignUp/> : <LogIn/>}
        </div>
    )
}

export default Home;