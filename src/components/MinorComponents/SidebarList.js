import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const SidebarList = ({ total, archived, shared, received }) => {
  return (
    <ListGroup className="Sidebar-color">
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">All Notes
            <Badge pill className="List-badge">{ total || 0 }</Badge>
        </ListGroupItem>
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">Archieved Notes
            <Badge pill className="List-badge">{ archived || 0 }</Badge>
        </ListGroupItem>
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">Shared Notes
            <Badge pill className="List-badge">{ shared || 0 }</Badge>
        </ListGroupItem>
        <ListGroupItem className="Sidebar-color List-text" tag="a" href="#">Received Notes
            <Badge pill className="List-badge">{ received || 0 }</Badge>
        </ListGroupItem>
    </ListGroup>
  );
}

export default SidebarList;



