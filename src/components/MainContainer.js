import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SidebarList from './MinorComponents/SidebarList';
import Note from './MinorComponents/Note';

import '../css/MainContainer.css';

const MainContainer = (props) => {
   return (
    <Container className="Main" fluid={true}>
      <Row>
        <Col className="Sidebar-color Sidebar" md="3">
            <SidebarList />
        </Col>
        <Col sm="12" md="9" className="Note-container">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </Col>
      </Row>
    </Container>
  );
}


export default MainContainer
