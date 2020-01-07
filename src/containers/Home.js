import React, {useState} from 'react';
import { Heading } from 'rebass';

function Home() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function saveUser() {
        try {
            const endpoint = 'http://localhost:5000/api/saveUser';
            const data = {
            username: username,
            password: password
            // token: sessionStorage.getItem(token)
            }
            const configs = {
            method: 'POST',
            body: JSON.stringify(data), 
            mode: 'cors',
            headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
        } catch (err) {
            console.log(err)
        }
    }


    return(
        <div>
            <Heading fontFamily={'Roboto'} fontSize={'50px'}>WELCOME</Heading>
            <p>Sign up / Log in</p>
            <label>Username: </label>
            <input onChange={(e)=>setUsername(e.target.value)}></input>
            <label>Password: </label>
            <input onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={(e)=> saveUser()}>Submit</button>
        </div>
    )
}

export default Home;