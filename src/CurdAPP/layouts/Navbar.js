import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">BookStore</Navbar.Brand>
        <Nav className="ml-auto" style={{ display: 'flex', gap: '15px' }}>
          <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
          <Nav.Link as={Link} to="/show-books" className='nav-link'>Show Books</Nav.Link>
          <Nav.Link as={Link} to="/add-book" className='nav-link'>Add Books</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
