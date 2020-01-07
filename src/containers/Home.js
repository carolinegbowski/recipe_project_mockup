import React, {useState, useEffect} from 'react';
import { Heading, Button } from 'rebass';
import UserHomePage from '../components/UserHomepage';
import SignUpLogIn from '../components/SignUpLogIn';


function Home() {
    const [loggedIn, setLoggedIn] = useState(false)
    
    function useStateWithSessionStorage(sessionStorageKey) { 
        const [token, setToken] = useState(sessionStorage.getItem(sessionStorageKey) || '');
        return [token, setToken];
    }

    const [token, setToken] = useStateWithSessionStorage('token');

    useEffect(() => {
        sessionStorage.setItem('token', token) 
    },
        [token]
    )

    // let sessionToken = sessionStorage.getItem("token")
    // if (sessionToken) {
    //     setLoggedIn(true)
    // }

    function logOut() {
        setToken('')
        }

    return(
        <div>
            {token ? <UserHomePage/> : <SignUpLogIn setToken={setToken}/>}
            <Button fontFamily={'Roboto'} width={'100px'} m={'10px'} backgroundColor={'#DD9086'} color={'white'} onClick={e => logOut()}>Log Out</Button>
        </div>
    )
}

export default Home;