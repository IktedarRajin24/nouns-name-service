/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner'
import SectionOne from '../SectionOne/SectionOne'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionThree from '../SectionThree/SectionThree'
import SectionFour from '../SectionFour/SectionFour'

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
        </div>
    );
};

export default Homepage;