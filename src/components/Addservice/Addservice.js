import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';

const Addservice = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)

    const handleTitle = e => {
        setTitle(e.target.value)

    }
    const handlePrice = e => {
        setPrice(e.target.value)
    }
    const handleDescription = e => {
        setDescription(e.target.value)
    }
    const handleImage = e => {
        setImage(e.target.value)
    }

    const handleSubmit = e => {

        const service = { title: title, description: description, price: price, img: image }
        axios.post('https://shielded-bayou-33082.herokuapp.com/addservice', service)
            .then(res => console.log(res))

        // setTitle('')

        // setImage('')
        // setPrice(0)
        // setDescription('')
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div className="my-5">
            <form onSubmit={handleSubmit}>


                <input style={{}} type="text" onChange={handleTitle} placeholder="Title" />
                <br />
                <br />
                <input style={{}} type="description" onChange={handleDescription} placeholder="Description" />
                <br />
                <br />
                <input style={{}} type="price" onChange={handlePrice} placeholder="Price" />
                <br />
                <br />
                <input type="text" placeholder="image url" onChange={handleImage} />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Addservice;