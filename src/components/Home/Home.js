import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Brands></Brands>
            <About></About>
        </div>
    );
};

export default Home;