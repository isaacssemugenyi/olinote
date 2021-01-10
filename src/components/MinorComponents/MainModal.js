import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MainModal = ({ modalName, output }) => {   
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>{ modalName || ""}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Note</ModalHeader>
                    <ModalBody>
                       { output }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={toggle}>Cancel</Button>
                    </ModalFooter>    
            </Modal>
        </div>
    )
}
                        
export default MainModal