/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Ecosystem.sass'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const Ecosystem = (props) => {
    // console.log()
    const {name, picture} = props.ecosystem
    return (
        <div className='ecosystem'>
            <div className='details'>
                <img className='ecosystem-image' src={picture} alt="" />
                <p className='ecosystem-name'>{name}</p>
            </div>
            <div className='arrow-btn'>
                <ArrowSmallRightIcon className='arrow'/>
            </div>
        </div>
    );
};

export default Ecosystem;