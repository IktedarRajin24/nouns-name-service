/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionFour.sass'

const SectionFour = () => {
    return (
        <div className='section-four'>
            <h1 className='heading'>We are waiting for you</h1>
            <div className='brands'>
                <div className='motto'>
                    <div className='brand'>
                        <img src="images/brand.png" alt="brand" />
                    </div>
                    <p className='brand-motto'>Claim Your Name</p>
                </div>
                <div className='motto'>
                    <div className='brand'>
                        <img src="images/chrome.png" alt="chrome" />
                    </div>
                    <p className='brand-motto'>Install Extension</p>
                </div>
                <div className='motto'>
                    <div className='brand'>
                        <img src="images/github.png" alt="github" />
                    </div>
                    <p className='brand-motto'>Integrate NNS</p>
                </div>
                <div className='motto'>
                    <div className='brand'>
                        <img src="images/discord.png" alt="discord" />
                    </div>
                    <p className='brand-motto'>Meet The Squad</p>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;