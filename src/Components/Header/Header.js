import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/image/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className='header sticky-top'>
            <div className='dental-care'>
            <div>
                <img src={logo}  alt="" />
            </div>
            <div><h2>Prime Dental Care</h2></div>
            </div>
           <div className='link'>
           <Link to='/home'style={{ textDecoration: 'none'}}>Home</Link>
            <Link to='/login'style={{ textDecoration: 'none' }}>Login</Link>
            <Link to='/register'style={{ textDecoration: 'none' }}>Register</Link>
           </div>
        </div>
    );
};

export default Header;