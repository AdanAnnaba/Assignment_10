import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
  const navigate = useNavigate();


  const handleSubmit = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password)
  
  } 

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

if(user){
  navigate('/treatmentdetails')
}

  const navigateRegister = event =>{
    navigate('/register')
  }
    return (
        <div className='login-form'>
            <Form onSubmit={handleSubmit} className='w-25 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Enter Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    <p className='toggle' onClick={navigateRegister}>Please Register</p>
        </div>
    );
};

export default Login;