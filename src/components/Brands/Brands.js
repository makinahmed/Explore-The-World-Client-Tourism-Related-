import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//#fabc92 #7cccf8
const Brands = () => {
    return (
        <Container className="my-5">
            <h1 className="my-5">OUR BRANDS</h1>
            <Row className="gx-2 ">
                <Col className="py-5 my-3"lg={4} sm={12} style={{backgroundColor: "#fa8989"}}>
                    <h2>Airline Weekly</h2>
                    <p>The aviation sector's premier source for exclusive news and insightful analysis, written by industry experts. We cover everything from who's flying where, to innovative strategy,fleet,finance,and airline and airport data.</p>
                </Col>
                <Col className="py-5 my-3" lg={4} sm={12} style={{backgroundColor: "#fabc92"}}>
                    <h2>EventMB</h2>
                    <p>The world's most respected online resource for event professionals,complete with free newsletters,articles,events,and reports-all focused on the latest event-specific trends,techonology,innovatin,and educaton.</p>
                </Col>
                <Col className="py-5 my-3" lg={4} sm={12}  style={{backgroundColor: "#7cccf8"}}>
                    <h2>Daily Loading Report</h2>
                    <p>As the hospitality industry's insider email for the past two decades,we boil down the essential industry news into a quick,easily-digestible comprehensive daily report. Trusted by top executives around the world. </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Brands;