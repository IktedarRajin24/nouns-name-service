/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Names.sass'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { removeFromDb } from '../../../utilities/fakeDB';

const Names = ({name}) => {
    
    return (
        <div className='name'>
            <p className='name-tag'>{name.name}<span><img src="images/black800px.png" alt="" /></span></p>
            <div className='status-bar'>
                <button className={`view-btn ${name.status ==='available'? 'd-none': ''}`}>View</button>
                <button className={`buy-btn ${name.status ==='available'? '': 'd-none'}`}>Buy Now</button>
                <p className={`status ${name.status ==='available'? 'available': 'unavailable'}`}>{name.status ==='available'? 'Available': 'Not Available'}</p>
                <button onClick={removeFromDb(name.id)} className='delete-btn'><XMarkIcon style={{width: '20px', height: '20px', color: '#000'}}/></button>
            </div>
        </div>
    );
};

export default Names;