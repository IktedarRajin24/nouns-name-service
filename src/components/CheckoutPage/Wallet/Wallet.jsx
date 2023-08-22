/* eslint-disable no-unused-vars */
import React from 'react';
import './Wallet.sass'
import { useNavigate } from 'react-router-dom';

const Wallet = () => {
    const navigate = useNavigate()
    return (
        <div className='wallet-section'>
            <div className='heading'>
                <h1>Choose your wallet</h1>
                <p>Ethereum is the only payment option</p>
            </div>
            <div className='wallets'>
                <div className="wallet">
                    <img src="images/wallets/metamask.png" alt="metamask" />
                    <p>Metamask</p>
                </div>
                <div className="wallet">
                    <img src="images/wallets/coinbase.png" alt="coinbase" />
                    <p>Coinbase Wallet</p>
                </div>
                <div className="wallet">
                    <img src="images/wallets/wallet-connect.png" alt="wallet-connect" />
                    <p>WalletConnect</p>
                </div>
                <div className="wallet">
                    <img src="images/wallets/portis.png" alt="portis" />
                    <p>Portis</p>
                </div>
            </div>
            <div className='transaction'>
                <p>We will put a hold on the domain for 1 hour. The transaction must be completed within this hour. If the transaction is not completed or successful in that hour, the domain will be released for sale.</p>
                <button onClick={()=>{navigate('/success')}}>Start Transaction</button>
            </div>
        </div>
    );
};

export default Wallet;