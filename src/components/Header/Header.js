import React from 'react';
import { Container, ListGroupItem, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, googleLogOut } = useAuth()
    // console.log(user)
    return (
        <div>
            <Navbar bg="dark" fixed="top"  expand="lg" variant="dark" >
                <Container >
                    <Navbar.Brand as={Link} to="/"><span className="text-info">Explore The World</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto align-items-center">
                    <Nav.Link as={Link} to="/home"><span className="text-white">HOME</span></Nav.Link>
                    <Nav.Link as={Link} to="/blog"><span className="text-white">BLOG</span></Nav.Link>
                {
                    user.email?<Nav.Link as={Link} to="/myorders"><span className="text-white">MY ORDERS</span></Nav.Link>: ''

                }
                {
                    user.email?<Nav.Link as={Link} to="/allorders"><span className="text-white">MANAGE USERS</span></Nav.Link>: ''

                }
                   {user.email ? <Nav.Link as={Link} to="/addservice"><span className="text-white">ADD TOUR</span></Nav.Link> : ''}
                {
                    user.email?<p className="text-muted mx-5 my-auto ">{user.displayName}</p>: ''
                }

                {
                    user.email?<Nav.Link as={Link} to="/login"> <button className="btn btn-secondary me-3" onClick={googleLogOut}><span className="text-white">LOG OUT</span></button> </Nav.Link>: <Nav.Link as={Link} to="/login"> <span className="text-white">LOG IN</span></Nav.Link>
                }
                {
                    user.email?<img className="round-circle" style={{ width: '5%', height: '5%', borderRadius: '50%' }} src={user.photoURL} alt="" />: ''
                }
               
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;