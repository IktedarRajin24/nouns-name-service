/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Transaction.sass';
import Amount from './Amount/Amount';
import { Outlet, useLocation } from 'react-router-dom';

const Transaction = () => {
    const location = useLocation()
    const path = location.pathname;
    const [isStep1Complete, setIsStep1Complete] = useState(false);
    const [isStep2Complete, setIsStep2Complete] = useState(false);
    const [isStep3Complete, setIsStep3Complete] = useState(false);

    useEffect(()=>{
        if(path==='/transaction/step1'){
            setIsStep1Complete(true);
        }else if (path ==='/transaction/step2'){
            setIsStep2Complete(true);
        }else if (path ==='/transaction/step3'){
            setIsStep3Complete(true);
        }
    },[path, setIsStep1Complete, setIsStep2Complete, setIsStep3Complete])


    console.log(path)
    return (
        <div className='transaction-page'>
            <h1 className='heading'>Before we start</h1>
            <p className='tag'>howimeet<img src="images/list7.png" alt="" /></p>
            <div className='steps'>
                <div className={`step ${isStep1Complete? 'border': ''}`}>
                        
                    <p className='step-no'><img className={`${isStep1Complete? 'image-visible': 'image-invisible'}`} src="images/done.png" alt=""  />Step 1</p>
                    <p className='process'>Complete a transaction to begin the timer</p>
                </div>
                <div className={`step ${isStep2Complete? 'border': ''}`}>
                        
                    <p className='step-no'><img className={`${isStep2Complete? 'image-visible': 'image-invisible'}`} src="images/done.png" alt="" />Step 2</p>
                    <p className='process'>Wait 60 seconds for the timer to complete</p>
                </div>
                <div className={`step ${isStep3Complete? 'border': ''}`}>
                        
                    <p className='step-no'><img className={`${isStep3Complete? 'image-visible': 'image-invisible'}`} src="images/done.png" alt="" />Step 3</p>
                    <p className='process'>Complete a second transaction to secure your name</p>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Transaction;