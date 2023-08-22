/* eslint-disable no-unused-vars */
import React from 'react';
import './Successful.sass'

const Successful = () => {
    return (
        <div className='success'>
            <h1>Congrats! 🎉</h1>
            <p>These names have been added to your collection.</p>
            <div className="name-noggle">
                <img  className='success-gif' src="images/success.gif" alt="" />
                <p className='name'>{localStorage.getItem("query")}<img className='name-noggles' src="images/name-noggle.png" alt="" /></p>
            </div>
            <button>
                Manage Name
            </button>
        </div>
    );
};

export default Successful;