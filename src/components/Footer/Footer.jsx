/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.sass'
import ScrollAnimation from '../PageOne/ScrollAnimation/ScrollAnimation';

const Footer = () => {
    return (
        <div>
            <ScrollAnimation/>
            <div className='footer'>
                <p className='footer-text'>Made with <span><img src="images/heart.svg" alt="" /></span> in the Nouniverse.</p>
            </div>
        </div>
    );
};

export default Footer;