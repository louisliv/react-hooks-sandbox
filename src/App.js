import React, { useReducer } from 'react';
import './App.css';
import PartRow from "./_components/PartRow";
import PartForm from "./_components/PartForm";

import { Table, Col, Container } from "reactstrap";

export const PART_ACTIONS = {
  ADD_PART: 'add-part',
  DELETE_PART: 'delete-part',
  INCREMENT_INVENTORY: 'increment-inventory',
  SET_INVENTORY: 'set-inventory'
} 

function reducer(parts, action) {
  switch (action.type) {
    case PART_ACTIONS.ADD_PART:
      return [...parts, action.payload]
    case PART_ACTIONS.INCREMENT_INVENTORY:
      return parts.map(part => {
        if (part.id === action.payload.id) {
          return {...part, inventory: part.inventory + action.payload.increment}
        }

        return part;
      })
    case PART_ACTIONS.SET_INVENTORY:
      return parts.map(part => {
        if (part.id === action.payload.id) {
          return {...part, inventory: action.payload.inventory}
        }

        return part;
      })
    case PART_ACTIONS.DELETE_PART:
      return parts.filter(part => part.id !== action.payload.id)
    default:
      return parts
  }
}

function App() {
  const [parts, dispatch] = useReducer(reducer, []);

  return (
    <Container>
      <Col xs={12} className="mt-4 mb-4 text-center">
        <PartForm dispatch={dispatch}/>
      </Col>
      <Col xs={12}>
        <Table>
          <thead>
            <tr>
              <th>Part Name</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Inventory</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {parts.map(part => {
              return (
                <PartRow key={part.id} part={part} dispatch={dispatch}/>
              )
            })}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
}

export default App;
