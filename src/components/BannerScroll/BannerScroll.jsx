/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from 'react-fast-marquee';
import './BannerScroll.sass'

const BannerScroll = () => {
    return (
        <Marquee className='scroll' pauseOnHover speed={50}>
                <div className='scroll-items'>
                    <p ><span><img src="images/list1.png" alt="" /></span>iCloud.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list2.png" alt="" /></span>creative.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list3.png" alt="" /></span>metaverse.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list4.png" alt="" /></span>uberUK.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list5.png" alt="" /></span>nft.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list6.png" alt="" /></span>simple.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list7.png" alt="" /></span>adobe.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list8.png" alt="" /></span>microsoft.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list4.png" alt="" /></span>contract.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list1.png" alt="" /></span>bitcoin.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list2.png" alt="" /></span>ethereum.</p>
                </div>
                <div className='scroll-items'>
                    <p><span><img src="images/list3.png" alt="" /></span>solidity.</p>
                </div>
        </Marquee>
    );
};

export default BannerScroll;