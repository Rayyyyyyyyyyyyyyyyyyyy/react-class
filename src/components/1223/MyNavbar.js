import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">goShopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact={true}>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <NavDropdown title="產品分類" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product/men">
                Men 男性
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product/baby">
                Baby 嬰兒
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
