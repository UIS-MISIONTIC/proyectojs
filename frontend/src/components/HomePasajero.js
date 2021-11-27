import React from 'react';

import {Container, Row, Col, Stack, Image} from 'react-bootstrap';

import image from "../assets/images/airplane.jpg";

const HomePasajero = () =>{
    return (
        <>

<Container>
  <Row>
    <Col>
    <Stack gap={3} className="align-items-center">
        
  <Image src= {image}/>

  <div></div>
  <div></div>
 
  <div className="bg-light border">UIS MISION TIC 2022</div>
  <div className="bg-light border">Universidad Industrial de Santander</div>
  <div className="bg-light border">Bucaramanga - Santander</div>
  <div></div>
  <div></div>

</Stack>
    </Col>
  </Row>
</Container>

      </>
    )
}

export default HomePasajero