import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Slider from '../Carousel/Slider';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div style={{marginTop: '80px'}} >
            <Slider></Slider>
           
            <Offers ></Offers>
            <Banner></Banner>
            <Brands></Brands>
            <About></About>
        </div>
    );
};

export default Home;