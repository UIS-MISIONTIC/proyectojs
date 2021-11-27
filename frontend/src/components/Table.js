import React from 'react';

import {Table} from 'react-bootstrap';

function MyTable() {


  return (
    <>

  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Codigo</th>
      <th>Itinerario</th>
      <th>Salida</th>
      <th>LLegada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bogota-Cartagena</td>
      <td>16/12/2021 06:35:00</td>
      <td>16/12/2021 08:30:00</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bogota-Cartagena</td>
      <td>16/12/2021 06:35:00</td>
      <td>16/12/2021 08:30:00</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bogota-Cartagena</td>
      <td>16/12/2021 06:35:00</td>
      <td>16/12/2021 08:30:00</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Bogota-Cartagena</td>
      <td>16/12/2021 06:35:00</td>
      <td>16/12/2021 08:30:00</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Bogota-Cartagena</td>
      <td>16/12/2021 06:35:00</td>
      <td>16/12/2021 08:30:00</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Bogota-Cartagena</td>
      <td>16/12/2021 06:35:00</td>
      <td>16/12/2021 08:30:00</td>
    </tr>
  </tbody>
</Table>

    </>
  )
}
export default MyTable

