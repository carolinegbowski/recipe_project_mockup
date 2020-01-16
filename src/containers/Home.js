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

    function logOut() {
        setToken('')
        }

    return(
        <div>
            {token ? <UserHomePage/> : <SignUpLogIn setToken={setToken}/>}
        </div>
    )
}

export default Home;