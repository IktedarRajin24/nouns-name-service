/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './SectionOne.sass'
import Ecosystem from '../Ecosystem/Ecosystem';

const SectionOne = () => {

    const [ecosystems, setEcosystems] = useState([]);
    useEffect(()=>{
        fetch('data/ecosystems.json')
        .then(res => res.json())
        .then(data => setEcosystems(data))
    },[])
    return (
        <div className='section-one'>
            <h1 className='heading'>What do the<span><img src="images/section-1.png" alt="" /> </span> represent</h1>
            <div className='video-section'>
                <video className='video' src="videos/nounish_video.mp4" controls></video>
            </div>
            
            <div className='section-details'>
                <button className='section-btn'>Made for the culture</button>
                <h1 className='section-details-heading'>Driven by a growing ecosystem</h1>
                <p className='section-details-desc'>Discover a growing network of partners who will natively resolve your .⌐◨-◨ domains</p>
                
            </div>
            <div className='ecosystems-md'>
                    {
                        ecosystems.map(ecosystem => <Ecosystem key={ecosystem._id} ecosystem={ecosystem}/>)
                    }
            </div>
            <div className='ecosystems-sm'>
                    {
                        ecosystems.slice(0,3).map(ecosystem => <Ecosystem key={ecosystem._id} ecosystem={ecosystem}/>)
                    }
            </div>
            <button className='show-more-btn'>Show More</button>
            {/* <div className='rectangle'></div> */}
        </div>
    );
};

export default SectionOne;