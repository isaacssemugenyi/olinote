import React from 'react';
import { 
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

const NewNote = ({ openModal }) => { 
    // Set modal   
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
            <Modal isOpen={modal} toggle={toggle}>
            <Button color="primary" onClick={toggle}>{ openModal }</Button>
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
    )
}
                        
export default NewNote