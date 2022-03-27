import React from 'react'
import axios from 'axios'
import './ForgotPass.css'; 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const ForgotPass = () => {
    return ( 
        <div>
        <div className='navbar'>
          <div className='navbar-brand'>
            <h1>Hungry</h1>
          </div>
          <div className='navbar-items'>
            <a href='' className='navbar-item1'>Home</a>
            <a href='' className='navbar-item2'>Cookbook</a>
            <a href='/menusdash' className='navbar-item3'>Menus</a>
          </div>
          <div className='navbar-account'>Profile Picture</div>
        </div>
        
        
        <Form className='login-form'>
        <h2 className='login-subtitle'>Forgot Password</h2>
        <FormGroup className='login-text'>
          <Label>Email</Label>
          <Input 
            type='email' 
            placeholder='Email' 
          />
        </FormGroup>
        <FormGroup className='login-text'>
          <Label>Save Key</Label>
          <Input
            type='password' 
            placeholder='Save Key' 
          />
        </FormGroup>

        <Button className='login-button'>Reset Password</Button>
      </Form>
      </div>
    )   
}

export default ForgotPass;