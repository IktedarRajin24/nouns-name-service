/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Staking.sass'

const Staking = () => {
    const [isOwned, setIsOwned] = useState(false)
    const [isTwitter, setIsTwitter] = useState(false)
    const [isAddedNNS, setIsAddedNNS] = useState(false)
    const [isStake, setIsStake] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if(isOwned){
            setCount(prev => prev+1)
        }else if(isTwitter){
            setCount(prev => prev+1)
        }else if(isAddedNNS){
            setCount(prev => prev+1)
        }
    },[setCount, isOwned, isTwitter, isAddedNNS])


    return (
        <div className='staking'>
            <div className='staking-details'>
                <p className='details'>
                    Follow the 3 steps below and click on EARN $NOGGLES to start staking. <br /> 
                    Our team will check daily that each account continues to meet the requirements for staking. <br />
                    Any change in the status of the requirements will result in a termination of the staking.
                </p>
                <button className='earn-btn'>
                    Earn $NOGGLES
                </button>
            </div>
            <div className="steps">
                <div className="step step-1">
                    <h1><span><img src="" alt="" /></span><img src='/images/list8.png'/>Own 1 Nounish Club</h1>
                    <p>This will allow you to be among the first 10k users to stake $NOGGLES</p>
                    <div>
                        <img src={`${isOwned? '/images/complete.png': '/images/pending.png'}`} alt="" />
                        <button onClick={()=>{setIsOwned(true)}} className={`${isOwned? 'owned': 'not-owned'}`}>{isOwned? 'Owned': 'Own'}</button>
                    </div>
                </div>
                <div className="step step-2">
                    <h1><img src='/images/twitter.png' />Connect Twitter</h1>
                    <p>This will allow us to verify your Proliferator status.</p>
                    <div>
                        <img src={`${isTwitter? '/images/complete.png': '/images/pending.png'}`} alt="" />
                        <button onClick={()=>{setIsTwitter(true)}}><img src="/images/white-twitter.png" alt="" />{isTwitter? 'Connected' : 'Connect'}</button>
                    </div>
                </div>
                <div className="step step-3">
                    <h1>Add<img src='/images/list7.png'/> to your name</h1>
                    <p>Add <img src='/images/list7.png'/> to your Twitter name and proliferate the nounish culture.</p>
                    <div>
                        <img src={`${isAddedNNS? '/images/complete.png': '/images/pending.png'}`} alt="" />
                        <button onClick={()=>{setIsAddedNNS(true)}}>Copy<img src='/images/list8.png'/></button>
                    </div>
                </div>
                <div className="step step-4">
                    <h1>Stake your NNS</h1>
                    <p>While they are staked, NNS are locked and cannot be sold on any marketplace.</p>
                    <div>
                        <img src={`${isStake? '/images/complete.png': '/images/pending.png'}`} alt="" />
                        <button onClick={()=>{setIsStake(true)}}>Stake NNS</button>
                    </div>
                </div>
            </div>
            <h1 className='count'>Steps Completed: {count}/3</h1>
            <div className='status-div'>
                <p>Staking Status</p>
                <div className={`status ${isStake? 'active': 'inactive'}`}>  
                    <span className={`${isStake? 'green-dot': 'red-dot'}`}> </span>
                    {isStake? 'Active': 'Inactive'}
                </div>
                
            </div>
        </div>
    );
};

export default Staking;