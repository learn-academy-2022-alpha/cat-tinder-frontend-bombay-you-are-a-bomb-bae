import React, { Component } from 'react';
import {Navbar, NavItem, NavLink, NavbarToggler, NavbarBrand, Collapse, Nav, NavbarText} from 'reactstrap';
import banner from '../assets/Canva-Banner.png' // with import
class Header extends Component{
  render(){
    return(
      <>
      <img src = {banner}/>
      <div>
    <Navbar
      color="success"
     dark
     expand="md"
     light
    >
      <NavbarBrand href="http://localhost:3001">
        Home
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="http://localhost:3001/catindex">
              Find A Match
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://localhost:3001/catnew">
              Add A Cat
            </NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>
  </div>
  </>
 )
}
}
export default Header
