import React, { useState } from "react"
import { Route, Switch, withRouter } from "react-router-dom";
import { Button, Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap'

export const Navigation = ({ loggedin, handleLogout }) => {

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">PC GameFinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="deals">Search Games</Nav.Link>
            <Nav.Link href="alerts">Alerts</Nav.Link>
            </Nav>
            <Nav>
            {loggedin ? 
              <>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link> 
                <Nav.Link eventKey={2} href="profile">Account</Nav.Link> 
                </>: 
              <>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="register">Register</Nav.Link> 
                </>}
            </Nav>
                      {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form> */}
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
}
