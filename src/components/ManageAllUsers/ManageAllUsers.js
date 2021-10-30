import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroupItem, Spinner, Table } from 'react-bootstrap';

const ManageAllUsers = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://shielded-bayou-33082.herokuapp.com/allorders")
            .then(res => res.json())
            .then(data => {
                <Spinner style={{ margin: '300px 300px', width: '500px' }} animation="border" variant="info" />
                setOrders(data)
            })
    }, [])

    // console.log(orders);
    const handleUserDelete = email => {
        const isConfirm = window.confirm("Are you sure you want to cancel Order ?");
        if (isConfirm) {
            axios.delete(`https://shielded-bayou-33082.herokuapp.com/manageallusers?email=${email}`)
                .then(res => {
                    const currentUser = orders.filter(order => order.email != email)
                    setOrders(currentUser)
                })
        }return
    }



    return (
        <>
            {
                orders.length ? <div>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr key={order._id}>
                                    <td>{order?.title}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.date}</td>
                                    <td><button onClick={() => handleUserDelete(order?.email)} className="btn btn-secondary">DELETE</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div> : <>
                    <Spinner animation="border" variant="info" />
                </>
            }
        </>
    );
};

export default ManageAllUsers;
