import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="bg-dark py-5 text-white" fluid >
            <Row>
                <Col lg={3} sm={12}>
                    <p>Staff</p>
                    <p>Advertise</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Contact Us</p>
                    <p>Copyright</p>
                    <p>Discover World Travel News</p>
                </Col>
                <Col lg={4} sm={12}>
                    <h3>Follow Us</h3>
                    <div >
                        <img style={{ width: '20%' }} src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                        <img style={{ width: '12%' }} src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                        <img className="ms-3" style={{ width: '12%' }} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="" />
                    </div>
                </Col>
                <Col lg={5} sm={12}>

                    <div >
                        <p>© 2021 Skift Inc. All Rights Reserved </p>

                        <p>  MEDIA ONLY: To reach our airline expert Madhu Unnikrishnan for interviews requests, email mu@skift.com. </p>

                        <p> Need support? Have Questions? Email Lindsay at lvb@skift.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;