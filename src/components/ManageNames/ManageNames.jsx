/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './ManageNames.sass'
import {addToDB, getNames} from '../../utilities/fakeDB'

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
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div className='names-section'>
                {
                    names.map(name => name.name)
                }

            </div>
            
        </div>
    );
};

export default ManageNames;