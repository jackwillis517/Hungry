import React, { useState } from 'react';

//Imports axios package for backend
import axios from 'axios';

//CSS for this specific components
import './CreateUser.css';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateUser = () => {
    //useState hook used to gather user info
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')

    //Function used to create a user account and verify that the password they entered twice matches
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
      //Form to create a user, it uses a lot of the same css classes as login does hence the classNames
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
          <Label>Email</Label>
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