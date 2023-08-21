/* eslint-disable no-unused-vars */
import React from 'react';
import './Checkout.sass'
import Wallet from './Wallet/Wallet';
import OrderSummary from './OrderSummary/OrderSummary';

const Checkout = () => {
    return (
        <div className='checkout'>
            <h1 className='checkout-h1'>Checkout</h1>
            <div className='route'>
                <div className='level'>
                    <div className='cart'>
                        <img src="images/checkout/cart.png" alt="" />
                    </div>
                    <p>Cart</p>
                </div>
                <div className='line'></div>
                <div className='level'>
                    <div className='pay'>
                        <img src="images/checkout/pay.png" alt="" />
                    </div>
                    <p>Pay</p>
                </div>
                <div className='line'></div>
                <div className='level'>
                    <div className='mint'>
                        <img src="images/checkout/mint.png" alt="" />
                    </div>
                    <p>Mint</p>
                </div>
            </div>
            <div className="content">
                <Wallet/>
                <OrderSummary/>
            </div>
        </div>
    );
};

export default Checkout;