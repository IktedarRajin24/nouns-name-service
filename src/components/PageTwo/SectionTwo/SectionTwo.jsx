/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionTwo.sass'

const SectionTwo = () => {
    return (
        <div className='sectionTwo'>
            <div className='text-section'>
                <h1>
                    Secure your nounish identity
                </h1>
                <p>
                    Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution. Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution.
                </p>
            </div>
            <div className='image-section'>
                
                <div className='image-2'>
                    <div className='image-1'>
                        <img src="images/nounish-id.png" alt="" />
                    </div>
                    <img className='tick' src="images/identity.png" alt="" />
                    <img className='user' src="images/nounish-id.png" alt="" />
                    <img className='noggle' src="images/noggle-pink.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;