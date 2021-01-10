import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewNote = () => {
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
            <Form onSubmit={handleSubmit}>
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
                    <div className="mr-auto">
                        <Button color="primary" type="submit">Add New Note</Button>{' '}
                        <Button color="secondary" onClick={clearField} type="reset">Reset</Button>
                    </div>
            </Form>
        </div>
    )
}

export default NewNote
