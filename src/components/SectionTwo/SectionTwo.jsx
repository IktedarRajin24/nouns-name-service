/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionTwo.sass';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCopyToClipboard } from 'usehooks-ts';

const SectionTwo = () => {
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
        </div>
    );
};

export default SectionTwo;