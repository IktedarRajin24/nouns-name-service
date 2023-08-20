/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;