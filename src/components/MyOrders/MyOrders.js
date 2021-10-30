import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const MyOrders = () => {
    const [myorders, setMyOrders] = useState([])
    const { user } = useAuth()




    useEffect(() => {
        fetch(`https://shielded-bayou-33082.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)

            })

    }, [myorders])
    // console.log(myorders);
    const handleCancleOrder = title => {
        const isConfirm = window.confirm("Are you sure you want to cancel Order ?");
        if (isConfirm) {

            axios.delete(`https://shielded-bayou-33082.herokuapp.com/myorders?title=${title}`)
                .then(res => {
                    const currentOrders = myorders.filter(myorder => myorder.title != title)
                    setMyOrders(currentOrders)
                })
        } return;


        // console.log(title);
    }

    return (
        <>
            {
                myorders.length ? <div>
                    <h2 className="mt-5">{user.displayName} , Check Your Orders</h2>
                    {
                        myorders.length ? <Container style={{ margin: '100px auto' }}>
                            <Row className="mx-auto">
                                {
                                    myorders.map(myorder => <Col key={myorder.title} lg={4} sm={12}>
                                        <Card style={{ width: '18rem' }}>
                                            <div style={{ height: '12rem' }}>
                                                <Card.Img variant="top" src={myorder?.img} style={{ width: '100%', height: '100%' }} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{myorder?.title}</Card.Title>
                                                <Card.Text>{myorder?.description.slice(0, 200)}
                                                </Card.Text>
                                            </Card.Body>
                                            <button className="btn btn-danger" onClick={() => handleCancleOrder(myorder?.title)} >Cancel Order</button>
                                        </Card>
                                    </Col>)
                                }

                            </Row>
                        </Container> : <h1 className="my-5">You do not have any order! </h1>
                    }

                </div > : <>
                    <Spinner animation="border" variant="info" />
                </>

            }
        </>

    );
};

export default MyOrders;