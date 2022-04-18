import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, usergoogle, loadinggoogle, errorgoogle] = useSignInWithGoogle(auth);
if(usergoogle){
  navigate('/home')
}

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
  navigate('/home');
}
  const navigateRegister = event =>{
    navigate('/register')
  }
    return (
        <div className='login-form'>
          <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-25 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Enter Password" required />
  </Form.Group>
  <Button className='w-100' variant="primary" type="submit">
    Submit
  </Button>
    </Form>
    <p className='toggle' onClick={navigateRegister}>Please Register</p>
    <div className='text-center'><button className='w-25 btn btn-primary'onClick={()=>signInWithGoogle()}>Sign in with google</button></div>
        </div>
    );
};

export default Login;