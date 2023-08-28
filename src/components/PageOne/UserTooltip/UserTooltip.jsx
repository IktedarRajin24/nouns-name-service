/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import './UserTooltip.sass'

const UserTooltip = (props) => {
    // console.log(props.user.about);
    const {user} = props;
    const {_id, name, picture, about, link} = user;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    // console.log(_id)
    return (
        <div className='userTooltip img' id={`image-${_id}`}>
            <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={picture} alt=""/>
        
            {
                isHovering &&
                <div className='tooltip'>
                    {/* <img className="user-image" src={picture} alt="" /> */}
                    <h2 className='user-name'>{name} <span><img src="images/username.png" alt="" /></span></h2>
                    <p className='user-details'>{about.slice(0,150)}</p>
                    <a href={link} target="_blank"><img src="images/twitter.png" alt="" /></a>
                </div>
            }
        </div>
        
        
    );
};

export default UserTooltip;