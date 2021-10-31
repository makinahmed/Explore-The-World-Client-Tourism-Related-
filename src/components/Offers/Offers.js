import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Offer from './Offer';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch("https://shielded-bayou-33082.herokuapp.com/offer")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <>{
            offers.length ? <Container className="mt-5 text-center">
                <h1 className="my-5">Available Tour</h1>
                <Row className="g-5 mx-auto">
                    {
                        offers.map(offer => <Offer key={offer.title} offer={offer}></Offer>)
                    }
                </Row>
            </Container> : <>
                <Spinner animation="border" variant="info" />

            </>
        }</>

    );
};

export default Offers;