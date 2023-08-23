/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './StepOne.sass'


const StepOne = () => {
    const [filled, setFilled] = useState(0);
    const [running, isRunning] = useState(false);
    const navigate = useNavigate()
    useEffect(()=>{
        if(filled<100 && isRunning){
            
            setTimeout(()=> setFilled(prev => prev+=2), 100)
            
        }
    }, [filled, isRunning, navigate])

    const handleNavigate = () =>{
        if(filled === 100){
                
            navigate('/transaction/step2');
        }
    }
    return (
        <div className='step-one'>
                
            <div className='progress-bar'>
                <div className='bar' style={{
                        width: `${filled}%`,
                        transition: 'width',
                        borderRadius: '50px'
                }}>

                </div>

            </div>
            <p className='status'>{filled}% completed</p>
            <p className='details'>
                Your transaction is now in progress, you can close this and come back later
            </p>
            <button onClick={handleNavigate} className='go-to-btn'>Go to Step 2</button>
        </div>
    );
};

export default StepOne;