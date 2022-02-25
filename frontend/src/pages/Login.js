// import styles from './Login.css';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useState } from 'react'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
    
    </div>
  );
}

export default Login;

{/* <Form className='login-form' onSubmit={loginUser}>
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
        <Label>Password</Label>
        <Input
          value = {password}
          onChange = {(e) => setPassword(e.target.value)} 
          type='password' 
          placeholder='Password' 
        />
      </FormGroup>

      <Button className='login-button' onClick={loginUser}>Log in</Button>
      <Button className='login-button'>Forgot Password</Button>
    </Form> */}