import React, { useState, useContext } from 'react'
import { 
    Button,
    Form, 
    FormGroup, 
    Input, 
    Label 
} from 'reactstrap'

import { PART_ACTIONS, PartsContext } from "../context";

function PartForm(props) {
    const [part, setPart] = useState({});
    const { dispatch } = useContext(PartsContext);

    const change = e => {
        setPart({...part, [e.target.name]: e.target.value})
    }

    const submit = e => {
        e.preventDefault();
        part.id = Date.now();
        part.inventory = 0;
        dispatch({type: PART_ACTIONS.ADD_PART, payload: part});
    }

    return (
        <Form inline onSubmit={submit} className="justify-content-center">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Name</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={part.name}
                    onChange={change}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="manufacturer" className="mr-sm-2">Manufacturer</Label>
                <Input
                    id="manufacturer"
                    name="manufacturer"
                    type="text" 
                    value={part.manufacturer}
                    onChange={change}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="model" className="mr-sm-2">Model</Label>
                <Input
                    id="model"
                    name="model"
                    type="text"
                    value={part.model}
                    onChange={change}/>
            </FormGroup>
            <Button type="submit" color="success">Add Part</Button>
        </Form>
    )
}

export default PartForm
