import React from 'react';
import { Container, ListGroupItem, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, googleLogOut } = useAuth()
    // console.log(user)
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" >
                <Container >
                    <Navbar.Brand as={Link} to="/">Explore The World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto align-items-center">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                {
                    user.email?<Nav.Link as={Link} to="/myorders">MyOrders</Nav.Link>: ''

                }
                {
                    user.email?<Nav.Link as={Link} to="/allorders">Manage All Users</Nav.Link>: ''

                }
                   {user.email ? <Nav.Link as={Link} to="/addservice">Add Tour</Nav.Link> : ''}
                {
                    user.email?<p className="text-muted mx-5 my-auto ">{user.displayName}</p>: ''
                }

                {
                    user.email?<Nav.Link as={Link} to="/login"> <button className="btn btn-secondary me-3" onClick={googleLogOut}>LogOut</button> </Nav.Link>: <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                }
                {
                    user.email?<img className="round-circle" style={{ width: '8%', height: '8%', borderRadius: '50%' }} src={user.photoURL} alt="" />: ''
                }
               
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;