import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'

//CSS for this specific components
import '../stylesheets/CreateUser.css';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateUser = () => {
    //useState hook used to gather user info
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      verifyPassword: ''
    })

    const {username, email, password, verifyPassword} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
      (state) => state.auth
    )

    useEffect(() => {
      if (isError){
        toast.error(message)
      }

      if (isSuccess || user) {
        navigate('/')
      }

      dispatch(reset())
    }, [username, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value

      }))
    }

    const onSubmit = (e) => {
      e.preventDefault()

      if (password !== verifyPassword){
        toast.error('Passwords do not match')
      } else {
        const userData = {
          username, email, password,
        }

        dispatch(register(userData))
        toast.success('Account created!')
      }
    }

    return ( 
      //Form to create a user, it uses a lot of the same css classes as login does hence the classNames
      <Form className='login-form' onSubmit={onSubmit}>
        <h2 className='login-subtitle'>Create Account</h2>
        <FormGroup className='login-text'>
          <Label>Username</Label>
          <Input 
            value = {username}
            id = 'username'
            name = 'username'
            onChange={onChange}
            type='text' 
            placeholder='Username' 
          />
        </FormGroup>
        <FormGroup className='login-text'>
          <Label>Email</Label>
          <Input
            value = {email}
            id = 'email'
            name = 'email'
            onChange = {onChange} 
            type='email' 
            placeholder='Email' 
          />
        </FormGroup>
        <FormGroup className='login-text'>
          <Label>Password</Label>
          <Input
            value = {password}
            id = 'password'
            name = 'password'
            onChange = {onChange} 
            type='password' 
            placeholder='Password' 
          />
        </FormGroup>
        <FormGroup className='login-text'>
          <Label>Verify Password</Label>
          <Input
            value = {verifyPassword}
            id = 'verifyPassword'
            name = 'verifyPassword'
            onChange = {onChange} 
            type='password' 
            placeholder='Password' 
          />
        </FormGroup>
        <Button className='login-button'>Create</Button>
      </Form>
    )
  }

export default CreateUser;