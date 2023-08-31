/* eslint-disable no-unused-vars */
import React from 'react';

const ManageNames = () => {
    const names = [
        {
            id: 1,
            name: "howimeet",
            status: "available"
        },
        {
            id: 2,
            name: "memeWorld",
            status: "unavailable"
        },
        {
            id: 3,
            name: "hawkeye",
            status: "available"
        },
        {
            id: 4,
            name: "Superman",
            status: "available"
        },
        {
            id: 5,
            name: "CreativeAwesome",
            status: "unavailable"
        },
        {
            id: 6,
            name: "GGEZ",
            status: "available"
        },
        {
            id: 7,
            name: "appleBoy",
            status: "available"
        },
    ]
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
            
        </div>
    );
};

export default ManageNames;