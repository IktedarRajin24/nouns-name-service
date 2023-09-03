/* eslint-disable no-unused-vars */
import React from 'react';
import './Successful.sass'
import { useNavigate } from 'react-router-dom';

const Successful = () => {
    const navigate = useNavigate()
    return (
        <div className='success'>
            <h1>Congrats! 🎉</h1>
            <p>These names have been added to your collection.</p>
            <div className="name-noggle">
                <img  className='success-gif' src="images/success.gif" alt="" />
                <p className='name-tag'>{localStorage.getItem("query")}<img className='name-noggles' src="images/name-noggle.png" alt="" /></p>
            </div>
            <button onClick={()=>{navigate('/manageNames')}}>
                Manage Name
            </button>
        </div>
    );
};

export default Successful;