import React, { useState } from 'react'
import axios from 'axios'
import styles from './CreateUser.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const CreateUser = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')

    const createAccount = (e) => {
        e.preventDefault()
        const userData = {
            username: username,
            email: email,
            password: password
        }
        if (password === verifyPassword) {
            axios.post("http://localhost:5000/api/users", userData)
            .then((response) => {
                console.log(response.status)
                console.log(response.data.token)
            })
        }
        else {
            alert("Passwords don't match")
        }
    }

    return ( 
      <Form className='login-form' onSubmit={createAccount}>
        <h1 className='login-title'>
          <span className='font-weight-bold'>Hungry</span>
        </h1>
        <h2 className='login-subtitle'>Create Account</h2>

        <FormGroup className='login-text'>
          <Label>Username</Label>
          <Input 
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
            type='text' 
            placeholder='Username' 
          />
        </FormGroup>
        <FormGroup className='login-text'>
          <Label>email</Label>
          <Input
            value = {email}
            onChange = {(e) => setEmail(e.target.value)} 
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
        <FormGroup className='login-text'>
          <Label>Verify Password</Label>
          <Input
            value = {verifyPassword}
            onChange = {(e) => setVerifyPassword(e.target.value)} 
            type='password' 
            placeholder='Password' 
          />
        </FormGroup>

        <Button className='login-button'>Create</Button>
      </Form>
    )
  }

export default CreateUser;