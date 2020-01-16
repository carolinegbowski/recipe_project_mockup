import React, { useState } from 'react';
import { Card, Box, Flex, Heading, Button } from 'rebass';
import { Input } from '@rebass/forms'; 

function SignUp(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function newUser() {
        try {
            const endpoint = 'http://localhost:5000/api/newUser';
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

        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <Heading color={'#894532'} fontFamily={'futura'} fontWeight={'bold'} fontSize={'35px'} mt={'20px'} mb={'10px'} letterSpacing={'3px'}>SIGN UP</Heading>
            <Flex>
                <Box width={3/7}></Box>
                <Card mx={'5px'}>
                    <p>Email</p>
                    <Input onChange={(e)=> setUsername(String(e.target.value))}></Input>
                </Card>
                <Card mx={'5px'}>
                    <p>Password</p>
                    <Input onChange={(e)=> setPassword(String(e.target.value))}></Input>
                </Card>
                <Box width={3/7}></Box>
            </Flex>
            <Button fontFamily={'futura'} fontWeight={'lighter'} width={'100px'} m={'10px'} backgroundColor={'#FD9185'} color={'white'} onClick={(e)=> newUser()}>SIGN UP</Button>
        </div>
    )
}

export default SignUp;
