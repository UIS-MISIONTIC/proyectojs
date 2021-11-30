import React from 'react';

import {Container, Row, Col, Stack, Image} from 'react-bootstrap';

import image from "../assets/image/airplane.jpg";

const HomePasajero = () =>{

  const user = JSON.parse(localStorage.getItem('data'));
    return (
        <>

<Container>
  <Row>
    <Col>
    <Stack gap={3} className="align-items-center">
        
  <Image src= {image}/>

  <div></div>
  <div></div>
 
  <div className="bg-light border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
 
  <div></div>
  <div></div>

  <div></div>
  <div></div>
 
  <div className="bg-light border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
 
  <div></div>
  <div></div>

  <div></div>
  <div></div>
 
  <div className="bg-light border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
 
  <div></div>
  <div></div>

  <div></div>
  <div></div>
 
  <div className="bg-light border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
 
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