import React from 'react'
import { 
    Form,
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap'

import { PART_ACTIONS } from "../App";

function PartRow(props) {

    const changeInventory = e => {
        e.preventDefault();

        props.dispatch({
            type: PART_ACTIONS.SET_INVENTORY,
            payload: {
                id: props.part.id,
                inventory: parseInt(e.target.value)
            }
        })
    }

    return (
        <tr>
            <td>{props.part.name}</td>
            <td>{props.part.manufacturer}</td>
            <td>{props.part.model}</td>
            <td>
                <Form>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend"
                            onClick={() => props.dispatch({
                                type: PART_ACTIONS.INCREMENT_INVENTORY,
                                payload: { id: props.part.id, increment: -1 }
                        })}>-</InputGroupAddon>
                        <Input placeholder="Amount" 
                            type="number" 
                            step="1"
                            value={props.part.inventory}
                            onChange={changeInventory}
                        />
                        <InputGroupAddon addonType="append"
                            onClick={() => props.dispatch({
                                type: PART_ACTIONS.INCREMENT_INVENTORY,
                                payload: { id: props.part.id, increment: 1 }
                        })}>+</InputGroupAddon>
                    </InputGroup>
                </Form>
            </td>
            <td><Button color="danger" onClick={() => props.dispatch({ 
                type: PART_ACTIONS.DELETE_PART,
                payload: { id: props.part.id }
            })}>Delete</Button></td>
        </tr>
    )
}

export default PartRow
