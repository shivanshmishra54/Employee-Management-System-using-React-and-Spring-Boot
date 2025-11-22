import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './header.css'


const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
               <Container>
                 <Navbar.Brand to="/"><strong>
                   Employee Management System
                   </strong>
                 </Navbar.Brand>

                 <Nav className="ms-auto">
                    <NavLink as={Link} to="/" className="nav-link">Employee</NavLink>
                    <NavLink as={Link} to="/add" className="nav-link">Add Employee</NavLink>
                 </Nav>
               </Container>

        </Navbar>
    
    </>
  )
}

export default Header;
