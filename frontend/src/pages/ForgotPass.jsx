// Never Used. Ever. Not a feature. Not enough time. Remember your password dumbass.
// Be an old person and write it down on a sticky note
import React from 'react'
import '../stylesheets/ForgotPass.css'; 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const ForgotPass = () => {
    return ( 
        <div>
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