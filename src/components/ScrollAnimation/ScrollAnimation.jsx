/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from 'react-fast-marquee';
import './ScrollAnimation.sass'

const ScrollAnimation = () => {
    return (
        <div className='footer-animation'>
            <Marquee className='animationOne' direction='right'>
                <img src="images/nounish1.png" alt="" />
                <img src="images/nounish2.png" alt="" />
                <img src="images/nounish3.png" alt="" />
                <img src="images/nounish4.png" alt="" />
                <img src="images/nounish1.png" alt="" />
                <img src="images/nounish2.png" alt="" />
                <img src="images/nounish3.png" alt="" />
                <img src="images/nounish4.png" alt="" />
                <img src="images/nounish1.png" alt="" />
                <img src="images/nounish2.png" alt="" />
            </Marquee>
            <Marquee className='animationTwo' direction='left'>
                <img src="images/nounish1.png" alt="" />
                <img src="images/nounish2.png" alt="" />
                <img src="images/nounish3.png" alt="" />
                <img src="images/nounish4.png" alt="" />
                <img src="images/nounish1.png" alt="" />
                <img src="images/nounish2.png" alt="" />
                <img src="images/nounish3.png" alt="" />
                <img src="images/nounish4.png" alt="" />
                <img src="images/nounish1.png" alt="" />
                <img src="images/nounish2.png" alt="" />
            </Marquee>
        </div>
    );
};

export default ScrollAnimation;