import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import { Delete, Archive, Share } from '@material-ui/icons';

import '../../css/Note.css';

const Note = (props) => {
    return (
        <div>
            <Card className="Card-main">
                <div className="Note-content" onClick={()=> alert('Hello there')}>
                    <CardBody className="Cardbody">
                        <CardTitle tag="h4" className="Note-text">{ props.title || 'No title' }</CardTitle>
                        <CardText className="Note-text">{props.content || 'No content provided' }</CardText>
                    </CardBody>
                </div>
                <div className="Note-details">
                    <div> <small>Date created: <br /> 2021-01-06 </small> </div>
                    <div className="Note-icons">
                        <Delete color="secondary" className="Single-icon" onClick={()=> alert('Delete Btn')}></Delete>
                        <Archive color="danger" className="Single-icon" onClick={()=> alert('Archive Btn')}></Archive>
                        {/* <Unarchive className="Single-icon"></Unarchive> */}
                        <Share color="success" className="Single-icon" onClick={()=> alert('Share Btn')}></Share>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Note
