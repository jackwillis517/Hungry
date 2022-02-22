import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function Login() {
  return (
    <Form className='login-form'>
      <h1 className='login-title'>
        <span className='font-weight-bold'>Hungry</span>
      </h1>
      <h2 className='login-subtitle'>Login</h2>
      <FormGroup className='login-text'>
        <Label>Email</Label>
        <Input type='email' placeholder='Email' />
      </FormGroup>
      <FormGroup className='login-text'>
        <Label>Password</Label>
        <Input type='password' placeholder='Password' />
      </FormGroup>
      <Button className='login-button'>Log in</Button>
      <Button className='login-button'>Forgot Password</Button>
    </Form>
  );
}

export default Login;
