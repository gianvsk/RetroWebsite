import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { ThemeProviderr } from "./Theme";
import { MyContext } from "../App";

export const NavbarC = () => {

  const [textButtonNav, setTextButtonNav] = useState<string>('')

  const [navTheme, setNavTheme] = useState<string>('theme-light-nav')

  const navColorTheme = useContext(MyContext);

  useEffect(() => {
    setNavTheme(navColorTheme?.theme === 'light' ? 'theme-dark-nav' : 'theme-light-nav');
  }, [navColorTheme?.theme])

    return(
        <nav>
        <Navbar expand="md" className={`mb-0 color-navbar col-12 ${navTheme}`}>
          <Container fluid className="navContainerRev">
          <Navbar.Brand className='login'>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Navbar.Brand>
          <Navbar.Brand>
            <ThemeProviderr/>
          </Navbar.Brand>
            <Link to="/home"><Navbar.Brand>Home</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Side
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="offcanvas-separator">
                    <Link className='offcanvas-link' to="/home"><FontAwesomeIcon icon={faHouse} /> Home</Link>
                  </div>
                  <div className="offcanvas-separator">
                  <p className='offcanvas-link'><FontAwesomeIcon icon={faSearch} /> Search</p>
                  </div>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 searchbar"
                    aria-label="Search"
                    onChange={(e) => setTextButtonNav(e.target.value)}
                  />
                  { 
                  (textButtonNav!.length > 2 && textButtonNav[textButtonNav.length-1] !== ' ') && 
                  <Link to="home" state={{textButton: textButtonNav}}>
                    <Button className="card-button-1">
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </Link>}
                </Form>
                <h6>Don't use ' ' as last character</h6>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </nav>
    )
}