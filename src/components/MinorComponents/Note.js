import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import { Delete, Archive, Share } from '@material-ui/icons';

import '../../css/Note.css';

const Note = ({ title, created, content, fullShow, onDelete, onArchive, onShare }) => {
    return (
        <div>
            <Card className="Card-main">
                <div className="Note-content" onClick={ fullShow }>
                    <CardBody className="Cardbody">
                        <CardTitle tag="h4" className="Note-text">{ title || 'No title' }</CardTitle>
                        <CardText className="Note-text">{content || 'No content provided' }</CardText>
                    </CardBody>
                </div>
                <div className="Note-details">
                    <div> <small>Date created: <br /> { created } </small> </div>
                    <div className="Note-icons">
                        <Delete color="secondary" className="Single-icon" onClick={ onDelete }></Delete>
                        <Archive color="danger" className="Single-icon" onClick={ onArchive }></Archive>
                        {/* <Unarchive className="Single-icon"></Unarchive> */}
                        <Share color="success" className="Single-icon" onClick={ onShare }></Share>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Note
