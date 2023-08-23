/* eslint-disable no-unused-vars */
import React from 'react';
import './Transaction.sass';
import Amount from './Amount/Amount';
import { Outlet } from 'react-router-dom';

const Transaction = () => {
    const steps = [
        {
            step: 1,
            process: 'Complete a transaction to begin the timer',
        },
        {
            step: 2,
            process: 'Wait 60 seconds for the timer to complete',
        },
        {
            step: 3,
            process: 'Complete a second transaction to secure your name',
        },
    ]
    return (
        <div className='transaction-page'>
            <h1 className='heading'>Before we start</h1>
            <p className='tag'>howimeet<img src="images/list7.png" alt="" /></p>
            <div className='steps'>
                {
                    steps.map(step => <div className='step' key={step}>
                        
                        <p className='step-no'><img src="images/done.png" alt="" />Step {step.step}</p>
                        <p className='process'>{step.process}</p>
                    </div>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Transaction;