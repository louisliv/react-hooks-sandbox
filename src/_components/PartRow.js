import React, { useContext } from 'react'
import { 
    Form,
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap'

import { PART_ACTIONS, PartsContext } from "../context";

function PartRow(props) {
    const { dispatch } = useContext(PartsContext);

    const changeInventory = e => {
        e.preventDefault();

        dispatch({
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
                            onClick={() => dispatch({
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
                            onClick={() => dispatch({
                                type: PART_ACTIONS.INCREMENT_INVENTORY,
                                payload: { id: props.part.id, increment: 1 }
                        })}>+</InputGroupAddon>
                    </InputGroup>
                </Form>
            </td>
            <td><Button color="danger" onClick={() => dispatch({ 
                type: PART_ACTIONS.DELETE_PART,
                payload: { id: props.part.id }
            })}>Delete</Button></td>
        </tr>
    )
}

export default PartRow
