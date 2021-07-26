import React, { useReducer } from 'react';
import './App.css';
import PartRow from "./_components/PartRow";
import PartForm from "./_components/PartForm";

import { Table, Col, Container } from "reactstrap";
import { partReducer, PartsContext } from "./context";

function App() {
  const [parts, dispatch] = useReducer(partReducer, []);

  return (
    <PartsContext.Provider value={{parts, dispatch}}>
      <Container>
        <Col xs={12} className="mt-4 mb-4 text-center">
          <PartForm/>
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
                  <PartRow key={part.id} part={part}/>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Container>
    </PartsContext.Provider>
  );
}

export default App;
