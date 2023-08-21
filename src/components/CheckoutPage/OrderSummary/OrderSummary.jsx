/* eslint-disable no-unused-vars */
import React from 'react';
import './OrderSummary.sass'

const OrderSummary = () => {
    return (
        <div className='order-summary'>
            <div className='order-heading'>
                <h1>
                    Order Summary
                </h1>
                <button>
                    Edit
                </button>
            </div>
            <div className='items'>
                <p className='item-number'>Items <span>2</span></p>
                <div>
                    <p>ddssd.crypto</p>
                    <p>1.3820210122474703 (ETH)</p>
                </div>
                <div>
                    <p>rereer.888</p>
                    <p>0.3820210122474703 (ETH)</p>
                </div>
            </div>
            <div className='subtotal'>
                <p>Subtotal</p>
                <p>1.3820210122474703 (ETH)</p>
            </div>
            <div className='due'>
                <p>Total Due</p>
                <p>1.3820210122474703 (ETH)</p>
            </div>
            <div className='refund'>
                <p>Refund Policy</p>
            </div>
        </div>

    );
};

export default OrderSummary;