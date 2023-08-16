/* eslint-disable no-unused-vars */
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import './Banner.sass'
import BannerScroll from '../BannerScroll/BannerScroll';

const Banner = () => {
    return (
        <div className='banner'>
              <h1 className='banner-heading'>Your nounish identity</h1>
              <p className='banner-description'>Attach the legendary <span><img className='banner-img' src="images/banner-header.png" alt="banner-header" /></span>to your web3 identity. Own your nounish name, for life.</p>
              <div className='banner-form'>
                <input className='banner-input' type="text" name="domain" id="domain" placeholder='yourdomain' />
                <button className='banner-btn'><MagnifyingGlassIcon className='search-icon'/></button>
              </div>
              <BannerScroll/>
        </div>
    );
};

export default Banner;