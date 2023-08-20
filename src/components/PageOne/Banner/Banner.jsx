/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import './Banner.sass'
import BannerScroll from '../BannerScroll/BannerScroll';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [query, setQuery] = useState("");
    const [apiQuery, setApiQuery] = useState("");
    const [available, setAvailable] =useState(false);
    const [names, setNames] = useState([]);

    useEffect(()=>{
      fetch('data/names.json')
      .then(res => res.json())
      .then(data => setNames(data))
    }, [])

    useEffect(()=>{
      
      // names.slice(0,1).find(name => console.log(name.name) )
      // console.log(found);
      const timeoutID = setTimeout(() => {
        setApiQuery(query);
        setAvailable(names.find(name => name.name === query) ? true : false);
        
      }, 500);
      return ()=> clearTimeout(timeoutID)
    }, [query, names, apiQuery]);

    const handleChange = (e) =>{
      setQuery(e.target.value);
      setAvailable(names.find(name => name.name === query)? true: false)
    }

    const navigate = useNavigate();
    const searchKeyword = () =>{
      if(query && available === false){
        localStorage.setItem('query', query);
        localStorage.setItem('availability', available)
        navigate('/registered')
      }
    }

    
    return (
        <div className='banner'>
              <h1 className='banner-heading'>Your nounish identity</h1>
              <p className='banner-description'>Attach the legendary <span><img className='banner-img' src="images/banner-header.png" alt="banner-header" /></span>to your web3 identity. Own your nounish name, for life.</p>
              <div className='banner-form'>
                <input onChange={handleChange} value={query} className='banner-input' type="text" name="domain" id="domain" placeholder='yourdomain' />
                <button className='banner-btn' onClick={searchKeyword}><MagnifyingGlassIcon className='search-icon'/></button>
              </div>
              <div className={`search-result ${!apiQuery? "invisible" : "visible"}`}>
                <p>{apiQuery}</p>
                <p className={available? "result-unavailable": "result-available"}>{apiQuery? (available? "Not Available": "Available"): ""  }</p>
              </div>
              <BannerScroll/>
        </div>
    );
};

export default Banner;