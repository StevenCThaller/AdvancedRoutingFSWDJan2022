import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import style from "./Navigation.module.css"

const Navigation = ({ title, links }) => {
  const { myTitle, box } = style
  
  return (
    <Navbar expand="lg" className={ box }>
      <Container>
        <Navbar.Brand className={ myTitle } as={Link} to="/">{ title }</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              links.map((link, i) => {
                if(link.type === "link") {
                  return <Nav.Link key={i} as={Link} to={link.path}>{link.text}</Nav.Link>
                } else if(link.type === "dropdown"){
                  return (
                    <NavDropdown key={i} title={link.text} id="basic-nav-dropdown">
                      {
                        link.dropdownLinks.map((dLink, j) => (
                          <NavDropdown.Item key={`${i} ${j}`} as={Link} to={`${link.path}${dLink.path}`}>{dLink.text}</NavDropdown.Item>
                        ))
                      }
                    </NavDropdown>
                  )
                }
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation