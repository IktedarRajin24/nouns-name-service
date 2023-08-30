/* eslint-disable no-unused-vars */
import React from 'react';
import './Dashboard.sass'
import NNS from '../nns/NNS';

const Dashboard = () => {

    const nns = [
        {
            id: 1,
            name: 'Yolo Nouns',
            picture: '/images/nns-img-1.png',
            status: 'staked',
            days: '24'
        },
        {
            id: 2,
            name: 'Yolo Nouns',
            picture: '/images/nns-img-2.png',
            status: 'not staked',
            days: '0'
        },
        {
            id: 3,
            name: 'Yolo Nouns',
            picture: '/images/nns-img-1.png',
            status: 'not staked',
            days: '0'
        },
        {
            id: 4,
            name: 'Yolo Nouns',
            picture: '/images/nns-img-2.png',
            status: 'staked',
            days: '30'
        },
        {
            id: 5,
            name: 'Yolo Nouns',
            picture: '/images/nns-img-1.png',
            status: 'not staked',
            days: '0'
        }
    ]
    return (
        <div className='dashboard'>
            <div className='dashboard-heading'>
                <div className='container owned-div'>
                    <h3>My $Noggles</h3>
                    <p className='noggle-amount'>{nns.length>0? '24535.42': '0'}</p>
                    <div className='details'>
                        <p>Noggles owned in your wallet</p>
                        <button>Send</button>
                    </div>
                </div>
                <div className='container pending'>
                    <h3>Pending $Noggles</h3>
                    <p className='noggle-amount'>{nns.length>0? '4535.42': '0'}</p>
                    <div className='details'>
                        <p>Noggles staked and available for withdraw</p>
                        <button>Withdraw</button>
                    </div>
                </div>
                <div className='container staking-status'>
                    <h3>Staking Status</h3>
                    <p className={nns.length>0? 'active': 'inactive'}><span className={nns.length>0? 'green-dot': 'red-dot'}></span>
                    {nns.length>0? 'Active': 'Inactive'}</p>
                    <div className='details'>
                        <button>Start</button>
                    </div>
                </div>
            </div>
            <div className='nns-info'>
                <h3>My NNS</h3>
                <div className='info'>
                    <p>Select All</p>
                    <div className='nns-numbers'>
                        <p>NNS Owned: {nns.length}</p>
                        <p>NNS Staked: {nns.filter(n => n.status === 'staked').length}</p>
                    </div>
                </div>
                <div className={`${nns.length>0? 'nns-section': 'd-none'}`}>
                    {
                        nns.map(n =><NNS key={n.id} nns={n}/>)
                    }
                </div>
                <div className={`${nns.length===0? 'no-nns': 'd-none'}`}>
                    <h1>
                        You need to own at least one NNS to start earning $NOGGLES    
                    </h1> 
                    <button>
                        Get your first NNS
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;