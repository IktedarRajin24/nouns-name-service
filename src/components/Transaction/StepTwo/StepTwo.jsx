/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './StepTwo.sass'
import { useNavigate } from 'react-router-dom';

const StepTwo = () => {
    const navigate = useNavigate()
    const [second, setSecond] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            if (second < 60) {
                setSecond(prev => prev + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [second])

    const handleClick = () =>{
        if(second === 60){
            navigate('/success')
        }
    }

    return (
        <div className='step-two'>
            <div className="outer">
                <div className="inner" id='inner-div' style={{background: `conic-gradient(#36A4F1, #9C61F3, #F66B7A, #CC5CD8, #36A4F1 ${second * 6}deg, #EFE9FD 0deg)`}}>
                    <div className="progress">
                        {second}
                    </div>
                </div>
            </div>
            <p className='details'>
                This timer helps prevent others from registering the name before you do. Your name is not registered until you’ve completed the second transaction.
            </p>
            <button onClick={handleClick}>
                Go to step 3
            </button>
            
        </div>
    );
};

export default StepTwo;
