import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h2 className="my-5">About Us</h2>
            <Row className="align-items-center mb-5">
                <Col lg={6} className="my-5" sm={12} style={{ backgroundColor: '#CCCCCC' }}>
                    <div style={{padding: '60px 0'}}>
                        <p className="p-5">
                            Focused on connecting companies with Skift’s unique ecosystem of travel industry influencers and decision makers, our in-house marketing studio creates engaging, insightful content and experiences for brands.
                        </p>
                        <button className="btn btn-secondary">Continue</button>
                    </div>
                </Col>
                <Col lg={6} sm={12} className="">
                    <img style={{ height: 'auto',width: '100%' }} src="https://i.ibb.co/5vG6KGJ/aro2.jpg" alt="" />
                </Col>

            </Row>
        </Container>
    );
};

export default About;