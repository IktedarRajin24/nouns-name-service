/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../PageOne/Banner/Banner'
import SectionOne from '../PageOne/SectionOne/SectionOne'
import SectionTwo from '../PageOne/SectionTwo/SectionTwo'
import SectionThree from '../PageOne/SectionThree/SectionThree'
import SectionFour from '../PageOne/SectionFour/SectionFour'

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