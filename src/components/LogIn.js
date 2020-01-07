import React, { useState } from 'react';
import { Heading, Button, Card, Flex, Box } from 'rebass';
import { Label, Input } from '@rebass/forms'; 

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function checkCredentials() {
        try {
            const endpoint = 'http://localhost:5000/api/logIn';
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
            <Heading fontFamily={'Roboto'} my={'20px'}>Log In</Heading>
            <Flex>
                <Box width={3/7}></Box>
                <Card mx={'5px'}>
                    <p>Email</p>
                    <Input onChange={(e)=>setUsername(String(e.target.value))}></Input>
                </Card>
                <Card mx={'5px'}>
                    <p>Password</p>
                    <Input onChange={(e)=>setPassword(String(e.target.value))}></Input>
                </Card>
                <Box width={3/7}></Box>
            </Flex>
            <Button fontFamily={'Roboto'} width={'100px'} mt={'20px'} backgroundColor={'#DD9086'} color={'white'} onClick={(e)=>checkCredentials()}>Log In</Button>
        </div>
    )
}

export default LogIn;
