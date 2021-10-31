import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className="mb-5" >
            <Row className="align-items-center">
                <Col lg={8} sm={12} className="mx-auto">

                    <div style={{width: '100%'}}>
                        <img  style={{ width: '100%', height: '100vh' }} src="https://i.ibb.co/yqWdJg8/joshua-earle-87-Jy-Mb9-Zf-U-unsplash.jpg" alt="" />
                    </div>
                </Col>
                <Col className="mx-auto px-3" lg={4} sm={12}>
                    <div className="">
                        <h1 className=" my-5">
                            Subscribe to Skift Pro</h1>
                        <p>
                            Explore World is our daily news membership service. Readers rely on our in-depth reporting, exclusive interviews, and breaking news coverage to make decisions and get ahead of competitors.
                        </p>
                        <button className="my-5 btn btn-secondary">Subscribe Now</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;