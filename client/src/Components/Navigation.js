
import { Button, Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap'

export const Navigation = () => {

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">PC GameFinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#find_deals">Find Deals</Nav.Link>
            <Nav.Link href="#alerts">Alerts</Nav.Link>
            <Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            </Nav>
            <Nav>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#Register">
                Register
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
}
