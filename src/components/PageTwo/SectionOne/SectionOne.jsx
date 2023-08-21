/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import './SectionOne.sass'
import { useNavigate } from 'react-router-dom';

const SectionOne = () => {
    const [query, setQuery] = useState(localStorage.getItem('query'));
    const [apiQuery, setApiQuery] = useState("");
    const [available, setAvailable] =useState(localStorage.getItem('availability'));
    const [names, setNames] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = ()=>{navigate('/checkout')}

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
    return (
        <div className='sectionOne'>
            <div className='image'>
                <img className='gif' src="images/nns-gif.gif" alt="" />
            </div>
            <div className='details-area'>
                <p>Search over 1.000.000 available names</p>
                <div className='banner-form'>
                    <input onChange={handleChange} value={query} className='banner-input' type="text" name="domain" id="domain" placeholder={localStorage.getItem('query')} />
                    <button className='banner-btn'><MagnifyingGlassIcon className='search-icon'/></button>
                </div>
                
                <div className='availability'>
                    <span className={` ${!available? "available" : "hidden"}`}><img src="images/tick.png" alt="" /><p>Your NNS is available</p></span>
                    <span className={` ${available? "unavailable" : "hidden"}`}><img src="images/cross.png" alt="" /><p>Your NNS is not available</p></span>
                </div>
                <p className='search-result'>{query}</p>
                <div className='price-section'>
                    <p>own forever for <b>$800.00</b></p>
                    <p className='price-details'>popular names are more expensive</p>
                </div>
                <button className='get-btn' onClick={query && handleNavigate}>Get Your Name</button>
                <ul className='benefits'>
                    <li><img src="images/tick.png" alt="" />secure your nounish identity</li>
                    <li><img src="images/tick.png" alt="" />Access the NNS squad</li>
                    <li><img src="images/tick.png" alt="" />Earn $NOGGLES</li>
                    <li><img src="images/tick.png" alt="" />Create your nounish profile</li>
                    <li><img src="images/tick.png" alt="" />Join a growing set of benefits</li>
                </ul>

            </div>
        </div>
    );
};

export default SectionOne;