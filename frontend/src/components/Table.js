import React, {useEffect, useState} from 'react';

import axios from 'axios';

import * as ReactBootStrap from 'react-bootstrap';


const MyTable = () => {

  const [posts, getPosts] = useState ({ blogs: []})

  useEffect(()=>{

    const fetchPostList = async ()=>{

       const {data} = await axios('https://proyectojs-backend.herokuapp.com/vuelo')

       getPosts({blogs: data})

       console.log(data)
    }
    fetchPostList()

  },[getPosts])

  return (
    <>

  <ReactBootStrap.Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Aeronave</th>
      <th>CódigoVuelo</th>
      <th>Cupo</th>
      <th>Destino</th>
      <th>Llegada</th>
      <th>Origen</th>
      <th>Salida</th>
      <th>TipoAvión</th>
    </tr>
  </thead>
  <tbody>{

    posts.blogs && posts.blogs.map((item) => (

    

      <tr key={item.id}>
      <td>{item.Aeronave}</td>
      <td>{item.CódigoVuelo}</td>
      <td>{item.Cupo}</td>
      <td>{item.Destino}</td>
      <td>{item.Llegada}</td>
      <td>{item.Origen}</td>
      <td>{item.Salida}</td>
      <td>{item.TipoAvión}</td>
     
      </tr>
           
    ))}
  </tbody>
</ReactBootStrap.Table>
    </>
  );
}
export default MyTable


  
