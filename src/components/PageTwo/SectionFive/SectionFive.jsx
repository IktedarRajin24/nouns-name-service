/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionFive.sass'

const SectionFive = () => {
    return (
        <div className='sectionFive'>
            
            <div className='image-section'>
                <div className='my-info'>
                    <img className='user-img' src="images/user-img.png" alt="" />
                    <p className='name'>JP<span><img src="images/list7.png" alt="" /></span></p>
                    <img className='my-desc' src="images/my-info.png" alt="" />
                </div>
                <hr />
                <div className='props-projects'>
                    <div className='props'>
                        <p>My active props</p>
                        <img className='img' id='img-1' src="images/prop-1.png" alt="" />
                        <img className='img' id='img-2' src="images/prop-2.png" alt="" />
                        <img className='img' id='img-3' src="images/prop-3.png" alt="" />
                    </div>
                    <div className='projects'>
                        <p>My projects</p>
                        <img className='img' id='img-1' src="images/project-1.png" alt="" />
                        <img className='img' id='img-2'  src="images/project-2.png" alt="" />
                    </div>
                </div>
                
            </div>
            <div className='text-section'>
                <h1 className='heading'>Create your nounish profile</h1>
                <p className='description'>Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution. Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution.</p>
            </div>
        </div>
    );
};

export default SectionFive;