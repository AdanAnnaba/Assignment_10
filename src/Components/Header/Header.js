import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Assets/image/logo.png';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = ()=>{
        signOut(auth);
    }
    return (
        <div className='header sticky-top'>
            <div className='dental-care'>
            <div>
                <img src={logo}  alt="" />
            </div>
            <div><h2>Prime Dental Care</h2></div>
            </div>
           <div className='link'>
           <Link to='/home'style={{ textDecoration: 'none'}}><span className='m-3'>Home</span></Link>
            { user ?
               <button className='btn btn-primary' onClick={handleLogOut}>Logout</button>
            :
                <Link to='/login'style={{ textDecoration: 'none' }}><span className='btn btn-primary'>Login</span></Link>}
           </div>
        </div>
    );
};

export default Header;