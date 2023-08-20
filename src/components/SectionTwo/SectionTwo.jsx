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

    
    
    useEffect(() => {
        
        for (let i = 1; i <= 35; i++) {
            const userToDisplay = users.find(user => user._id === i);
            // const user =JSON.stringify(userToDisplay)
            // console.log(userToDisplay);
            // const user = `<div>
            //     <p>${userToDisplay.name}</p>
            // </div>`
            if(userToDisplay){
                const userTooltip = `<div>
                    <p>${userToDisplay.name}</p>
                    <p>${userToDisplay.about}</p>
                </div>`
                tippy(`#image-${i}`, {
                    content: userTooltip,
                    placement: 'bottom'
                });
            }else{
                console.log('failed')
            }
            
        }
    }, [users]);

    

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
                <img src="images/users/user1.png" alt="" id="image-1" className="img" />
                <img src="images/users/user2.png" alt="" id="image-2" className="img" />
                <img src="images/users/user3.png" alt="" id="image-3" className="img" />
                <img src="images/users/user4.png" alt="" id="image-4" className="img" />
                <img src="images/users/user5.png" alt="" id="image-5" className="img" />
                <img src="images/users/user6.png" alt="" id="image-6" className="img" />
                <img src="images/users/user7.png" alt="" id="image-7" className="img" />
                <img src="images/users/user8.png" alt="" id="image-8" className="img" />
                <img src="images/users/user9.png" alt="" id="image-9" className="img" />
                <img src="images/users/user10.png" alt="" id="image-10" className="img" />
                <img src="images/users/user11.png" alt="" id="image-11" className="img" />
                <img src="images/users/user12.png" alt="" id="image-12" className="img" />
                <img src="images/users/user13.png" alt="" id="image-13" className="img" />
                <img src="images/users/user14.png" alt="" id="image-14" className="img" />
                <img src="images/users/user15.png" alt="" id="image-15" className="img" />
                <img src="images/users/user16.png" alt="" id="image-16" className="img" />
                <img src="images/users/user17.png" alt="" id="image-17" className="img" />
                <img src="images/users/user18.png" alt="" id="image-18" className="img" />
                <img src="images/users/user19.png" alt="" id="image-19" className="img" />
                <img src="images/users/user20.png" alt="" id="image-20" className="img" />
                <img src="images/users/user21.png" alt="" id="image-21" className="img" />
                <img src="images/users/user22.png" alt="" id="image-22" className="img" />
                <img src="images/users/user23.png" alt="" id="image-23" className="img" />
                <img src="images/users/user24.png" alt="" id="image-24" className="img" />
                <img src="images/users/user25.png" alt="" id="image-25" className="img" />
                <img src="images/users/user26.png" alt="" id="image-26" className="img" />
                <img src="images/users/user27.png" alt="" id="image-27" className="img" />
                <img src="images/users/user28.png" alt="" id="image-28" className="img" />
                <img src="images/users/user29.png" alt="" id="image-29" className="img" />
                <img src="images/users/user30.png" alt="" id="image-30" className="img" />
                <img src="images/users/user31.png" alt="" id="image-31" className="img" />
                <img src="images/users/user32.png" alt="" id="image-32" className="img" />
                <img src="images/users/user33.png" alt="" id="image-33" className="img" />
                <img src="images/users/user34.png" alt="" id="image-34" className="img" />
                <img src="images/users/user35.png" alt="" id="image-35" className="img" />
            </div>
            <div className='image-container-sm'>
                <img src="images/users/user1.png" alt="" id="image-1" className="img" />
                <img src="images/users/user2.png" alt="" id="image-2" className="img" />
                <img src="images/users/user3.png" alt="" id="image-3" className="img" />
                <img src="images/users/user4.png" alt="" id="image-4" className="img" />
                <img src="images/users/user5.png" alt="" id="image-5" className="img" />
                <img src="images/users/user6.png" alt="" id="image-6" className="img" />
                <img src="images/users/user7.png" alt="" id="image-7" className="img" />
                <img src="images/users/user8.png" alt="" id="image-8" className="img" />
                <img src="images/users/user9.png" alt="" id="image-9" className="img" />
                <img src="images/users/user10.png" alt="" id="image-10" className="img" />
                <img src="images/users/user11.png" alt="" id="image-11" className="img" />
                <img src="images/users/user12.png" alt="" id="image-12" className="img" />
                <img src="images/users/user13.png" alt="" id="image-13" className="img" />
                <img src="images/users/user14.png" alt="" id="image-14" className="img" />
                <img src="images/users/user15.png" alt="" id="image-15" className="img" />
                <img src="images/users/user16.png" alt="" id="image-16" className="img" />
                <img src="images/users/user17.png" alt="" id="image-17" className="img" />
                <img src="images/users/user18.png" alt="" id="image-18" className="img" />
                <img src="images/users/user19.png" alt="" id="image-19" className="img" />
                <img src="images/users/user20.png" alt="" id="image-20" className="img" />
                <img src="images/users/user21.png" alt="" id="image-21" className="img" />
                <img src="images/users/user22.png" alt="" id="image-22" className="img" />
                <img src="images/users/user23.png" alt="" id="image-23" className="img" />
                <img src="images/users/user24.png" alt="" id="image-24" className="img" />
                <img src="images/users/user25.png" alt="" id="image-25" className="img" />
                <img src="images/users/user26.png" alt="" id="image-26" className="img" />
                <img src="images/users/user27.png" alt="" id="image-27" className="img" />
                <img src="images/users/user28.png" alt="" id="image-28" className="img" />
                <img src="images/users/user29.png" alt="" id="image-29" className="img" />
                <img src="images/users/user30.png" alt="" id="image-30" className="img" />
                <img src="images/users/user31.png" alt="" id="image-31" className="img" />
                <img src="images/users/user32.png" alt="" id="image-32" className="img" />
                <img src="images/users/user33.png" alt="" id="image-33" className="img" />
                <img src="images/users/user34.png" alt="" id="image-34" className="img" />
                <img src="images/users/user35.png" alt="" id="image-35" className="img" />
            </div>
            {/* {
                users.slice(0,1).map(user => <UserTooltip key={user._id} user={user}/>)
            } */}
        </div>
    );
};

export default SectionTwo;