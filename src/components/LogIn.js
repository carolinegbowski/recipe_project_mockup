import React, { useState } from 'react';
import { Heading, Button, Card, Flex, Box } from 'rebass';
import { Label, Input } from '@rebass/forms'; 

function LogIn(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function checkCredentials() {
        try {
            const endpoint = 'http://localhost:5000/api/logIn';
            const data = {
            username: username,
            password: password
            }
            const configs = {
            method: 'POST',
            body: JSON.stringify(data), 
            mode: 'cors',
            headers: {'Content-type' : 'application/json'}
            }
            const res = await fetch(endpoint, configs);
            const json_res = await res.json();
            if (json_res) {
                sessionStorage.setItem("token", json_res[1])
                sessionStorage.setItem("id", json_res[0])
                props.setToken(json_res[1])
            }
            // if (json_res.token) {
            //     sessionStorage.setItem("token", json_res.token)
            //     sessionStorage.setItem("id", json_res.id)
            //     props.setToken(json_res.token)
            // }
        } catch (err) {
            console.log(err)
        } 
    }

    const buttonStyles = {
        fontFamily: 'futura',
        fontWeight: 'lighter',
        width: '105px',
        margin: '20px',
        px: '20px',
        backgroundColor: '#FD9185',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: '0px',
        outlineColor: 'white'

    }

    return(
        <div>
            <Heading color={'#894532'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'35px'} mt={'0px'} mb={'10px'} letterSpacing={'3px'}>LOG IN</Heading>
            <Flex>
                <Box width={3/7}></Box>
                <Card mx={'5px'}>
                    <p>Email</p>
                    <Input onChange={(e)=>setUsername(String(e.target.value))}></Input>
                </Card>
                <Card mx={'5px'}>
                    <p>Password</p>
                    <Input type='password' onChange={(e)=>setPassword(String(e.target.value))}></Input>
                </Card>
                <Box width={3/7}></Box>
            </Flex>
            <Button style={buttonStyles} onClick={(e)=>checkCredentials()}>LOG IN</Button>
        </div>
    )
}

export default LogIn;
