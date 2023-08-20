/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionThree.sass'

const SectionThree = () => {
    return (
        <div className='section-three'>
            <div className='text-section'>
                <h1 className='heading'>Earn $Noggles</h1>
                <p className='description'>Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution. Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution.</p>
                <button className='start-btn'>Start Staking</button>
            </div>
            <div className='image-section'>
                <img src="images/coin.gif" alt="" />
                <div className='shadow'></div>
            </div>
        </div>
    );
};

export default SectionThree;