import React from 'react';
import Img1 from '../../images/img-1.jpg';
import Img2 from '../../images/img-2.jpg';
import Img3 from '../../images/img-3.jpg';
import Img4 from '../../images/img-4.jpg';
import Img5 from '../../images/img-5.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
const Carousel = require('react-responsive-carousel').Carousel;

const Slider = () => {
    const sliderStyle = {
        width: '100%',
        height: 'auto'
    }
    return (
        <>
            <Carousel
                dynamicHeight={true}
                autoPlay={true}
                infiniteLoop={true}
                style={styles}
                showThumbs={false}
                showIndicators={false}
                showArrows={true}>
                <div style={sliderStyle}>
                    <img height="100%" src={Img1} alt="" />

                </div>
                <div style={sliderStyle}>
                    <img height="100%" src={Img2} alt="" />

                </div>
                <div style={sliderStyle}>
                    <img height="100%" src={Img3} alt="" />

                </div>
                <div style={sliderStyle}>
                    <img height="100%" src={Img4} alt="" />

                </div>
                <div style={sliderStyle}>
                    <img height="100%" src={Img5} alt="" />
                </div>
            </Carousel>
        </>
    );
};

export default Slider;