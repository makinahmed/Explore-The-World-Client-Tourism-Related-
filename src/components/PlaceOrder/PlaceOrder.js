import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const axios = require('axios');

const PlaceOrder = () => {
    const { title } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [currentTour, setCurrentTour] = useState();
    const { user } = useAuth()
  

    useEffect(() => {
        fetch(`https://shielded-bayou-33082.herokuapp.com/offer/${title}`)
            .then(res => res.json())
            .then(data => {
                setCurrentTour(data)
            })
    }, [title])
    const onSubmit = e => {
        const name = user.displayName
        const email = e?.email;
        const date = e?.date;
        const address = e?.address;
        currentTour.date = date;
        currentTour.address = address;
        currentTour.status = "Pending";
        currentTour.email = email;
        currentTour.name = name;
      

        axios.post('https://shielded-bayou-33082.herokuapp.com/placeorder', currentTour)
            .then(res => console.log(res))


        reset()
    }
    return (
        <>  {

            currentTour ? <Container className="my-5">
                <h1 className="mb-5">Welcome to {title} !</h1>
                <Row>
                    <Col className="col-lg-6">
                        <div className="my-1">
                            <div className="my-3">
                                <img src={currentTour?.img} style={{ border: '2px solid gray', borderRadius: '5px', width: '100%' }} alt="" />
                            </div>
                            <div className="my-1">
                                <h3>{currentTour?.title}</h3>
                                <p style={{ alignItems: 'left' }}>{currentTour?.description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-lg-6">
                        <div className="mx-auto" style={{ border: '1px solid gray', borderRadius: '5px', width: '350px' }}>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', padding: '25px', textAlign: 'left' }}>
                                <p>Enter Your Name: </p>
                                <input

                                    style={{ width: '100%', outline: 'none', border: '1px solid black' }}
                                    defaultValue={user.displayName}
                                    {...register("name", { required: "Please enter your name." })}
                                />
                                <br />
                                <br />
                                <p>Enter Your  Email: </p>
                                <input
                                    style={{ width: '100%', outline: 'none', border: '1px solid black' }}
                                    defaultValue={user.email}
                                    {...register("email", { required: "Please enter your email." })}
                                />
                                <br />
                                <br />
                                <p>Enter Your Present Address: </p>
                                <input
                                    style={{ width: '100%', outline: 'none', border: '1px solid black' }}
                                    // defaultValue={user.email} 
                                    {...register("address", { required: "Please enter your address." })}
                                />
                                <br />
                                <br />
                                <p>Enter Your Date: </p>
                                <input

                                    style={{ width: '100%', outline: 'none', border: '1px solid black' }}
                                    // defaultValue={user.email} 
                                    {...register("date", { required: "Please enter your date." })}
                                />
                                <br />
                                <br />
                                <input type="submit" value="Place Order" style={{ width: '100%' }} className="btn btn-secondary" />
                            </form>
                        </div>
                    </Col>
                </Row>


            </Container> : <>
                <Spinner animation="border" variant="info" />
            </>
        }
        </>
    );
};

export default PlaceOrder;
