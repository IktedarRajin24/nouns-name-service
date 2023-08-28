/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Amount.sass'
import { useNavigate } from 'react-router-dom';

const Amount = () => {

    const navigate = useNavigate();

    const [usd, setUsd] = useState(false)
    const [eth, setEth] = useState(true)
    const [usdActive, setUSDActive] = useState(false);
    const [ethActive, setETHActive] = useState(true);

    const handleUSD = () =>{
        setUsd(true);
        setEth(false);
        setUSDActive(true);
        setETHActive(false);
    }
    const handleETH = () =>{
        setUsd(false);
        setEth(true);
        setETHActive(true);
        setUSDActive(false);
    }
    return (
        <div className='amount'>
            <div className='top'>
                <p>Some text</p>
                <div className='slider'>
                    <button onClick={handleUSD} style={{backgroundColor: usdActive? "#53AE94": "#fff", color: usdActive? "#fff": "#000"}} className='usd-switch'>
                        <img src="images/usd.png" alt="" />
                        <p>USDT</p>
                    </button>
                    <button onClick={handleETH} style={{backgroundColor: ethActive? "#547FEF": "#fff", color: ethActive? "#fff": "#000"}} className='eth-switch'>
                        <p>ETH</p>
                        <img src="images/eth.png" alt="" />
                        
                    </button>
                </div>
            </div>
            <div className={`amount-section-eth `}>
                <div className='registration'>
                    <p>1 Year Registration</p>
                    <p></p>
                    <p>{!usd && eth ? "0.5246 ETH": "50 USD"}</p>
                </div>
                <div className='network'>
                    <p>Est. Network Fee</p>
                    <p>{!usd && eth ? "0.5246 ETH": "50 USD"}</p>
                </div>
                <div className='total'>
                    <p>Estimated Total</p>
                    <p>{!usd && eth ? "0.5246 ETH": "50 USD"}</p>
                </div>
            </div>
            
            <div className="buttons">
                <button onClick={()=>{navigate('/checkout')}} className='back-btn'>Back</button>
                <button onClick={()=>{navigate('/transaction/step1')}} className='begin-btn'>Begin</button>
            </div>
        </div>
    );
};

export default Amount;