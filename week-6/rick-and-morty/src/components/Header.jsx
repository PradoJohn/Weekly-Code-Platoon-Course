import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import {FiSearch} from 'react-icons/fi';


export const Header = () => {

  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand as= {Link} to="/">Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as= {Link} to="characters/">CHARACTERS</Nav.Link>
            <Nav.Link as= {Link} to="about/">ABOUT</Nav.Link>
            <Nav.Link as= {Link} to="favorites/">FAVORITES</Nav.Link>
          </Nav>
          <Form className="d-flex"
          onSubmit={(e) => [
            e.preventDefault(),
            navigate(`/results/${userInput}/`),
          ]}
          >
            <Button type='submit' variant="outline-success" as={Link} to='results/' className='me-2'><FiSearch size={30} className='py-1'/></Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={(event)=>setSearchValue(event.target.value)}
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
