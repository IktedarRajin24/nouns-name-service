/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './NNS.sass'

const NNS = (props) => {
    // console.log(props.nns)
    const {name, days, picture, status} = props.nns;
    // console.log(name, days, picture, status)
    return (
        <div className='nns'>
            <img className='nns-img' src={picture} alt="" />
            <h3 className='nns-name'>{name}</h3>
            <p className='nns-days'>{days? `Days Staked: ${days}` : ''}</p>
            <button className={status==='staked'? `unstake-btn` : 'stake-btn'}>{status==='staked'? `Unstake` : 'Stake'}</button>
        </div>
    );
};

export default NNS;