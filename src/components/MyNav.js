import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


function MyNav(props) {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" activeKey={props.location.pathname} >                    
                    <LinkContainer to="/">
                        <Nav.Link >Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/new">
                        <Nav.Link >New Question</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/new">
                        <Nav.Link >New Question</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default withRouter(MyNav)