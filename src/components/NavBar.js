import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import MainModal from './MinorComponents/MainModal';
import NewNote from './MinorComponents/NewNote';

import '../css/Navbar.css'

const NavBar = (props) => { 
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
 
    return (
        <div>
        <Navbar className="Main-color NavBar" color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Olinote</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <MainModal modalName="Create A New Note" output={ <NewNote />} />           
                </NavItem>
            </Nav>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/">Preferences</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Log Out</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default NavBar

