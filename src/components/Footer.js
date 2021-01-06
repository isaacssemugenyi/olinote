import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

import '../css/Footer.css';

const Footer = (props) => {

  return (
    <div>
      <Navbar className="Main-color Footer" color="faded" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>@Orlin Coorperation</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Isaac Ssemugenyi</NavbarText>

      </Navbar>
    </div>
  );
}


export default Footer

