import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageAllUsers = () => {

    const [orders, setOrders] = useState([])
    // const [manageSingleOrder, setManageSingleOder] = useState()

    useEffect(() => {
        fetch("https://shielded-bayou-33082.herokuapp.com/allorders")
            .then(res => res.json())
            .then(data => {

                <Spinner style={{ margin: '300px 300px', width: '500px' }} animation="border" variant="info" />
                setOrders(data)
            })
    }, [])

    const handleUserDelete = email => {
        const isConfirm = window.confirm("Are you sure you want to cancel Order ?");
        if (isConfirm) {
            axios.delete(`https://shielded-bayou-33082.herokuapp.com/manageallusers?email=${email}`)
                .then(res => {
                    const currentUser = orders.filter(order => order.email != email)

                    setOrders(currentUser)
                })
        } return
    }
    const handleStatus = id => {
        const a = orders?.find(order => order?._id != id)
        // setManageSingleOder(a);
        fetch(`http://localhost:5000/manageallusers/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(a)

        })
            .then(res => res.json()).then(data => {
                // const orderStatus = orders?.filter(order => order?._id != id)

                // setOrders([...orderStatus])
            })
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
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr key={order._id}>
                                    {/* console.log(order._id); */}
                                    <td>{order?.title}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.date}</td>
                                    <td><button onClick={() => handleUserDelete(order?.email)} className="btn btn-secondary">DELETE</button></td>
                                    <td><button onClick={() => handleStatus(order?._id)} className="btn btn-secondary">{order?.status}</button></td>
                                </tr>

                                )
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
