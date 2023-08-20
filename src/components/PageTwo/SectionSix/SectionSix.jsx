/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionSix.sass'

const SectionSix = () => {
    return (
        <div className='sectionSix'>
            <div className='text-section'>
                <h1 className='heading'>Join a growing set of benefits</h1>
                <p className='description'>Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution. Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution.</p>
            </div>
            <div className='image-section'>
                <div className="card" id="card-1">
                    <img src="images/purple-tick.png" alt="" />
                    <img src="images/desc.png" alt="" />
                </div>
                <div className="card" id="card-2">
                    <img src="images/red-tick.png" alt="" />
                    <img src="images/desc.png" alt="" />
                </div>
                <div className="card" id="card-3">
                    <img src="images/blue-tick.png" alt="" />
                    <img src="images/desc.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionSix;