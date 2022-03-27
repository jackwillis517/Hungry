import React, { useState } from 'react';

//Imports axios package for backend
import axios from 'axios';

//CSS for this specific components
import './Login.css';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
    //useState hook used to gather user info
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Function that uses axios to make a post request to the server to verify user credentials
    const loginUser = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        axios.post("http://localhost:5000/api/users/login", userData)
        .then((response) => {
            console.log(response.status)
            console.log(response.data.token)
        })
    }

    <div></div>
    return ( 
      // Login component used for the user to login into their created account
      <Form className='login-form' onSubmit={loginUser}>
        <h1 className='login-title'>
          <span className='font-weight-bold'>Hungry</span>
        </h1>
        <h2 className='login-subtitle'>Login</h2>

        <FormGroup className='login-text'>
          <Label>Email</Label>
          <Input 
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            type='email' 
            placeholder='Email' 
          />
        </FormGroup>
        <FormGroup className='login-text'>
          <Label>Password</Label>
          <Input
            value = {password}
            onChange = {(e) => setPassword(e.target.value)} 
            type='password' 
            placeholder='Password' 
          />
        </FormGroup>

        <Button className='login-button'>Log in</Button>
      </Form>
   
      
    )
  }

export default Login;