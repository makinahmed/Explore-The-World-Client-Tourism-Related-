import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = (props) => {
    const { img, price, title, description } = props.offer;
    return (
        <Col lg={4} sm={12}>
            <Card style={{ width: '18rem'}}>
                <div style={{height: '12rem'}}>
                    <Card.Img variant="top" src={img} style={{ width: '100%', height: '100%' }} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description.slice(0, 200)}
                    </Card.Text>
                    <Link className="btn btn-success d-block" to={`/offer/${title}`}>Book Now</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Offer;