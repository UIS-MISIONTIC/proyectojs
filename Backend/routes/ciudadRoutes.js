const express = require('express');

const db = require('../src/db/crudCiudad.js');

const router = express.Router();

router.get('/', function(req, res){

    db.getAerolinea(function(arrayAerolinea){
  
      res.send(arrayAerolinea);
  
    })
  
  });
  
  router.get('/:id', function(req, res){
    const idCiudad = req.params.id;
    db.getCiudad(idCiudad, function(ciudad){
      res.json(ciudad);
    })
  })
  
  router.post('/', (req, res)=>{
    const ciudad = req.body;
    db.addCiudad(ciudad, function(response){
      res.send(response);
    })
  })
  
   router.put('/:id', (req, res)=>{
     const idCiudad = req.params.id;
     const ciudad = req.body;
     db.updateCiudadTotally(idCiudad, ciudad, function(response){
       res.send(response);
     })
   })  
  
   router.patch('/:id', (req, res)=>{
    const idCiudad = req.params.id;
    const ciudad = req.body;
    db.updateCiudadPart(idCiudad, ciudad, function(response){
      res.send(response);
    })
  })  
  
  router.delete('/:id', (req, res)=>{
    const idCiudad = req.params.id;
    db.deleteCiudad(idCiudad, function(response){
      res.send(response);
    })
  })

  module.exports = router;