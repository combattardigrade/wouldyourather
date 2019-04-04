import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'


function MyNav(props) {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" activeKey={props.location.pathname} >                    
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/new">New Question</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <NavDropdown title="Guest" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default withRouter(MyNav)