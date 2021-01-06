import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const SidebarList = (props) => {
  return (
    <ListGroup className="Sidebar-color">
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">All Notes
            <Badge pill className="List-badge">14</Badge>
        </ListGroupItem>
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">Archieved Notes
            <Badge pill className="List-badge">14</Badge>
        </ListGroupItem>
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">Shared Notes
            <Badge pill className="List-badge">14</Badge>
        </ListGroupItem>
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">Received Notes
            <Badge pill className="List-badge">14</Badge>
        </ListGroupItem>
    </ListGroup>
  );
}

export default SidebarList;



