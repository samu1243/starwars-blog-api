import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

export const Webnav = () => {
   const {store, actions} = useContext(Context);
   console.log(store.favorites)
  return (
    <Navbar bg="warning" expand="lg" sticky="top" id="navbar">
      <Container>
        <Navbar.Brand><Link to="/">Star Wars</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/planets'>Planets<i class="fa-solid fa-globe"></i></Link></Nav.Link>
            <Nav.Link><Link to='/characters'>Characters<i class="fa-solid fa-person"></i></Link></Nav.Link>
            <Nav.Link><Link to='/starships'>Starships<i class="fa-solid fa-jet-fighter"></i></Link></Nav.Link>
          </Nav>
            <NavDropdown id='favorite-nav' title={`Favorites ${store.favorites.length}`}>
            {store.favorites.map((item) => {
                return <NavDropdown.Item id="dropdown"> <span id="trash-icon" onClick={() => { actions.deleteFavorite(item.id) }} className={"fa fa-trash"}></span><span>{item.name}</span></NavDropdown.Item>
              })}
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

