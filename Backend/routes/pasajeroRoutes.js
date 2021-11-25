const express = require('express');

const dbP = require('../src/db/crudPasajero.js');

const router = express.Router();

router.get('/', function(req, res){

    dbP.getPasajeroAll(function(arrayPasajero){
  
      res.send(arrayPasajero);
  
    })
  
  });
  
  router.get('/:id', function(req, res){
    const idPasajero = req.params.id;
    dbP.getPasajero(idPasajero, function(pasajero){
      res.json(pasajero);
    })
  })
  
  router.post('/', (req, res)=>{
    const pasajero = req.body;
    dbP.addPasajero(pasajero, function(response){
      res.send(response);
    })
  })
  
   router.put('/:id', (req, res)=>{
     const idPasajero = req.params.id;
     const pasajero = req.body;
     dbP.updatePasajeroEntire(idPasajero, pasajero, function(response){
       res.send(response);
     })
   })  
  
   router.patch('/:id', (req, res)=>{
    const idPasajero = req.params.id;
    const pasajero = req.body;
    dbP.updatePasajeroPart(idPasajero, pasajero, function(response){
      res.send(response);
    })
  })  
  
  router.delete('/:id', (req, res)=>{
    const idPasajero = req.params.id;
    dbP.deletePasajero(idPasajero, function(response){
      res.send(response);
    })
  })

module.exports = router;