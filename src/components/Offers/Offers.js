import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Offer from './Offer';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch("https://shielded-bayou-33082.herokuapp.com/offer")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <Container className="mt-5 text-center">
            <Row className="g-5 mx-auto">
                {
                    offers.map(offer => <Offer key={offer.title} offer={offer}></Offer>)
                }
            </Row>
        </Container>
    );
};

export default Offers;