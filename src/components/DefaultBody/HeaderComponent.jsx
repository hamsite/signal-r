import React, { Component } from 'react';
import {Navbar, Nav, Form,FormControl,Button} from 'react-bootstrap';

class HeaderComponent extends Component {
    render() {
        return (
            
          <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">SignalR Switch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-danger">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
            
        );
    }
}

export default HeaderComponent;