import React, { useState } from 'react'
import axios from 'axios'
import styles from './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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