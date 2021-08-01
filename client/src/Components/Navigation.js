import React, { useState } from "react"
import { Route, Switch, withRouter } from "react-router-dom";
import { Button, Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap'

export const Navigation = ({ loggedin, handleLogout, submitGameSearch }) => {
  const [search, setSearch] =  useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">PC GameFinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="deals">Find Deals</Nav.Link>
            <Nav.Link href="alerts">Alerts</Nav.Link>
            <Form inline onSubmit={submitGameSearch}>
                <FormControl type="text" placeholder="Game Title" className="mr-sm-2" onChange={handleChange} 
                    name="search" value={search}/>
                <Button variant="outline-success" type='submit'>Search</Button>
            </Form>
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
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
}
