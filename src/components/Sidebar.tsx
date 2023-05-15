import React from 'react';
import { Button, Container, Form, ListGroup, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DropdownC } from './Dropdown';

export const Sidebar = () => {

    return (
/*         <Navbar className='sidebar col-4'>
            <ListGroup className='listGroup' variant='flush'>
                <ListGroup.Item className='listItem'><Link className="linkSidebar" to="/home">Movies</Link></ListGroup.Item>
                <ListGroup.Item className='listItem'><Link className="linkSidebar" to="/home">Categories</Link></ListGroup.Item>
                <ListGroup.Item className='listItem'><Link className="linkSidebar" to="/home">Awards</Link></ListGroup.Item>
                <ListGroup.Item className='listItem'><DropdownC/></ListGroup.Item>
            </ListGroup>
        </Navbar> */
        <Navbar expand="lg" className="mb-0 sidebar col-md-2">
        <Container fluid>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Side
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className="sidebarLink" href="/home">Home</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}