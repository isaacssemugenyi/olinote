import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";

import SidebarList from './MinorComponents/SidebarList';
import Note from './MinorComponents/Note';
import MainModal from './MinorComponents/MainModal';
import DeleteNote from './MinorComponents/DeleteNote';
// import DeleteAllNotes from './MinorComponents/DeleteAllNotes';
import ShareNote from './MinorComponents/ShareNote';

import '../css/MainContainer.css';

const NotesURL = 'https://jsonplaceholder.typicode.com/comments';

const MainContainer = (props) => {
  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
        try {
            setNotes(notes);
            const response = await axios.get(NotesURL);
            setNotes(response.data);
        } catch (e) {
            console.log(e);
            setNotes(notes);
        }
    };
    fetchNotes();
}, [notes]);
   
   return (
    <Container className="Main" fluid={true}>
      <Row>
        <Col className="Sidebar-color Sidebar" md="3">
            <SidebarList total={notes.length} />
        </Col>
        <Col sm="12" md="9" className="Note-container">

          {notes.map((note, id) => 
            <Note 
              key={id}
              title={note.name}
              content={note.body}
              created={note.id}
              fullShow={() => alert(`full show of note ${note.id}`)}
              onDelete={() => <MainModal modalName="Delete" output={ <DeleteNote />} /> } 
              onArchive={() => alert(`Archive note with id: ${note.id}`)}
              onShare={() => <MainModal output={ <ShareNote />} /> }
            />
            )
          }
              
        </Col>
      </Row>
    </Container>
  );
}


export default MainContainer
