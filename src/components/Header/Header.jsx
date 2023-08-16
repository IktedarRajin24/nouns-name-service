/* eslint-disable no-unused-vars */
import React from 'react';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid'
import './Header.sass'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <img className='nns-desktop' src="images/nns.png" alt="nns-logo" />
                <img className='nns-mobile' src="images/nns-logo.png" alt="nns-logo" />
                <h1 className='brand-name'>NNS</h1>
            </div> 
            <div className='buttons'>
                <button className='sign-in-btn'>Sign In</button>
                <button className='header-icons'><ShoppingCartIcon className='icons'/></button>
                <button className='header-icons'><HeartIcon className='icons'/></button>
            </div>
        </nav>
    );
};

export default Header;