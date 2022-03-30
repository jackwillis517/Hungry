import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'

//CSS for this specific components
import '../stylesheets/Login.css';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
    //useState hook used to gather user info
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    })

    const {email, password} = formData

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
        navigate('/navbar')
      }

      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value

      }))
    }

    const onSubmit = (e) => {
      e.preventDefault()

      const userData = {
        email,
        password,
      }

      dispatch(login(userData))
    }

    return ( 
      //Form to create a user, it uses a lot of the same css classes as login does hence the classNames
      <Form className='login-form' onSubmit={onSubmit}>
        <h2 className='login-subtitle'>Login</h2>
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

        <Button className='login-button'>Login</Button>
      </Form>
    )
  }

export default Login;