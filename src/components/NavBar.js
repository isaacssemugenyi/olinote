import React, { useState } from 'react';
import { 
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

import '../css/Navbar.css'

const NavBar = (props) => { 
    // Set modal   
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // Handle navbar collapse
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    // Handling form data
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");

    // const [ validateField, setValidateField ] = useState(false);
    // const emptyField = (target) => target.length <= 2 ? setValidateField(true) : setValidateField(false);

    const handleTitle = e => e.target.value !== "" ? setTitle(e.target.value) : "";
    const handleDescription = e => e.target.value !== "" ? setDescription(e.target.value) : "";

    const clearField = () => {
        setTitle("")
        setDescription("")
    }
    const handleSubmit = e => {
        e.preventDefault();
        alert(`${title}, ${description}`); 
        clearField();
    }
    

    return (
        <div>
        <Navbar className="Main-color NavBar" color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Olinote</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Button color="primary" onClick={toggle}>Create A New Note</Button>
                    <div>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Create New Note</ModalHeader>
                            <Form onSubmit={handleSubmit}>
                                <ModalBody>
                                    <FormGroup>
                                        <Label for="title">Title</Label>
                                        <Input 
                                            type="text" 
                                            name="title" 
                                            id="title" 
                                            placeholder="Note title" 
                                            value={title}
                                            onChange={handleTitle}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input 
                                            type="textarea" 
                                            name="description" 
                                            id="description" 
                                            placeholder="Note description" 
                                            value={description}
                                            onChange={handleDescription}
                                            onFocus={e => e.currentTarget.select()}
                                            />
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="mr-auto">
                                        <Button color="primary" type="submit">Add New Note</Button>{' '}
                                        <Button color="secondary" onClick={clearField} type="reset">Reset</Button>
                                    </div>
                                    <Button color="danger" onClick={toggle}>Cancel</Button>
                                </ModalFooter>
                            </Form>
                        </Modal>
                    </div>
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

