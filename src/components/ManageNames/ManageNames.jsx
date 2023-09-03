/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './ManageNames.sass'
import {addToDB, getNames} from '../../utilities/fakeDB'
import Names from './Names/Names';

const ManageNames = () => {
    const [names, setNames] = useState([]);
    
    useEffect(()=>{
        fetch('data/myNames.json')
        .then(res => res.json())
        .then(data => addToDB(data))
    },[])
    useEffect(()=>{
        const storedNames = getNames('names')
        setNames(storedNames)
        // console.log(names);
    },[])
    
    return (
        <div className='manage-names'>
            <h1 className='heading'>Manage your names</h1>
            <div className='sorting-section'>
                <select name="ending" id="ending">
                    <option value="all">Ending: All</option>
                </select>
                <select name="sort-by" id="sort-by">
                    <option value="name">Sort by: Name</option>
                    <option value="status">Sort by: Status</option>
                </select>
                <select name="status" id="status">
                    <option value="all">Status: All</option>
                    <option value="available">Status: Available</option>
                    <option value="unavailable">Status: Unavailable</option>
                </select>
            </div>
            <div className='names-section'>
                {
                    names.map(name => <Names key={name.id} name={name}/>)
                }

            </div>
            
        </div>
    );
};

export default ManageNames;