/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './UserTooltip.sass'

const UserTooltip = (props) => {
    // console.log(props.user.about);
    const {user} = props;
    const {name, picture, about, link} = user;
    console.log(about)
    return (
        <div className='tooltip'>
            <img className="user-image" src={picture} alt="" />
            <h2 className='user-name'>{name} <span><img src="images/username.png" alt="" /></span></h2>
            <p className='user-details'>{about.slice(0,150)}</p>
            <a href={link} target="_blank"><img src="images/twitter.png" alt="" /></a>
        </div>
    );
};

export default UserTooltip;