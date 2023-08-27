/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './SectionTwo.sass';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCopyToClipboard } from 'usehooks-ts';
import UserTooltip from '../UserTooltip/UserTooltip';
import tippy from 'tippy.js';
// import Tippy from '@tippyjs/react';

const SectionTwo = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('data/userDetails.json')
        .then(res => res.json())
        .then(data=> setUsers(data))  
    },[])
    
    const [value, copy] = useCopyToClipboard()
    const generateRandomString = () => {
        let result = '';
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 11; i++) {
          result += characters.charAt(Math.floor(Math.random()*charactersLength));
        }
        return result;
    };


    const notification = ()=>{
        copy(generateRandomString());
        toast.success('copied', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    

    return (
        <div className='section-two'>
            <div className='text-section'>
                <h1 className='heading'>Join the Squad</h1>
                <p className='description'>Claim your name, wear it on Twitter and become a Proliferator of the nounish revolution.</p>
                <p className='noggles'>Wear your noggles  <span><button onClick={notification}><img src="images/copy.png" alt="" /></button></span></p>
                <ToastContainer/>
                
            </div>
            <div className='image-container-lg'>
                {
                    users.map(user => <UserTooltip key={user._id} user={user} />)
                }
            </div>
            <div className='image-container-sm'>
                {
                    users.map(user => <img key={user._id} src={user.picture} className='img' id={`image-${user._id}`}/>)
                }
            </div>
            {/* <img key={user._id} src={user.picture} className='img' id={`image-${user._id}`}/> */}
        </div>
    );
};

export default SectionTwo;