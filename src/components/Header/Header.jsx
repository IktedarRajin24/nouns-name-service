/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid'
import './Header.sass'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const user = localStorage.getItem('user');
    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname
    const [loggedIn, setLoggedIn] = useState(false);
    const [isDashboard, setIsDashboard] = useState(true)
    const [isStaking, setIsStaking] = useState(false)

    const switchDashboard = () =>{
        setIsDashboard(true)
        setIsStaking(false)
        navigate('/profile/dashboard')
    }

    const switchStaking = () =>{
        setIsDashboard(false)
        setIsStaking(true)
        navigate('/profile/staking')
    }

    useEffect(()=>{
        if(user && path.includes('/profile')){
            setLoggedIn(true);
            
        }else{
            setLoggedIn(false)
        }
    },[path, user])

    const viewProfile = () =>{
        if(user){
            navigate('/profile/dashboard')
        }
    }
    return (
        <nav className='nav-bar'>
            <div className='logo' onClick={()=>{navigate('/')}}>
                <img className='nns-desktop' src="images/nns.png" alt="nns-logo" />
                <img className='nns-mobile' src="images/nns-logo.png" alt="nns-logo" />
                <h1 className='brand-name'>NNS</h1>
            </div> 
            <div className={`slider ${user && loggedIn? '': 'd-none' }`}>
                <button onClick={switchDashboard} className={`dashboard-btn ${isDashboard? 'blue-btn': ''}`}>Dashboard</button>
                <button onClick={switchStaking} className={`staking-btn ${isStaking? 'blue-btn': ''}`}>Staking</button>

            </div>
            <div className='buttons'>
                <button className={`sign-in-btn ${user? 'd-none': '' }`}>Sign in</button>
                <button onClick={viewProfile} className={`username ${user? '': 'd-none' }`}><img src='images/jack.png'/>{user? user: ''} <img src="images/dropdown.png"/></button>
                <button className={`header-icons ${user? 'd-none': '' }`}><ShoppingCartIcon className='icons'/></button>
                <button className={`header-icons ${user? 'd-none': '' }`}><HeartIcon className='icons'/></button>
            </div>
        </nav>
    );
};

export default Header;