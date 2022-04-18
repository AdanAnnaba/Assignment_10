import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user1, loadinggoogle, errorgoogle] = useSignInWithGoogle(auth);

  if(user1){
    navigate('/home');
  }


  const [createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  


  const handleSubmit = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password, name);  
    console.log(name);
  
  } 
  const navigateLogin = event =>{
    navigate('/login')
  }



    return (

             <div className='login-form'>
               <h2 className='text-center'>Please SignUp</h2>
    <Form onSubmit={handleSubmit} className='w-25 mx-auto'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' type="password" placeholder="Enter Password" />
    </Form.Group>
    <Button className='w-100' variant="primary" type="submit">
    Submit
    </Button>
    </Form>
    <p className='toggle' onClick={navigateLogin}>Please Login</p>
    <div className='text-center'><button className='w-25 btn btn-primary'onClick={()=>signInWithGoogle()}>Sign in with google</button></div>
        </div>
    );
};

export default Register;