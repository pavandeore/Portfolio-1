import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const Header = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" style={{backgroundColor: `#107896` }}>
            <Navbar.Brand href="#home"><img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Berihu logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="mr-auto align-items-center drop_down">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

};

export default Header;