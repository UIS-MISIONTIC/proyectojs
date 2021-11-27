import React from 'react';

import {Form, Button, Stack, Container, Row, Col} from 'react-bootstrap';

function MyForm() {


  return (
      <>

<Container>
  <Row>
    <Col>
    <Stack gap={3} className="align-items-center">

    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Correo electronico:</Form.Label>
      <Form.Control type="email" placeholder="ingresa tu dirreccion de correo" />
      <Form.Text className="text-muted">
        Nunca compartiremos tu direccion de correo con alguien mas.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contraseña:</Form.Label>
      <Form.Control type="password" placeholder="Contraseña" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="No soy un robot" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  </Stack>
  </Col>
  </Row>
  </Container>

  </>
  )
}

//ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm