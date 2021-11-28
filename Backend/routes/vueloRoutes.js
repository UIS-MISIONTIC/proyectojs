const express = require('express');

const dbV = require('../src/db/crudVuelo.js');

const router = express.Router();

router.get('/', function(req, res){

    dbV.getVueloAll(function(arrayVuelo){
  
      res.send(arrayVuelo);
  
    })
  
  });
  
  router.get('/:id', function(req, res){
    const idVuelo = req.params.id;
    dbV.getVuelo(idVuelo, function(vuelo){
      res.json(vuelo);
    })
  })
  
  router.post('/', (req, res)=>{
    const vuelo = req.body;
    dbV.addVuelo(vuelo, function(response){
      res.send(response);
    })
  })
  
   router.put('/:id', (req, res)=>{
     const idVuelo = req.params.id;
     const vuelo = req.body;
     dbV.updateVueloTotally(idVuelo, vuelo, function(response){
       res.send(response);
     })
   })  
  
   router.patch('/:id', (req, res)=>{
    const idVuelo = req.params.id;
    const vuelo = req.body;
    dbV.updateVueloPart(idVuelo, vuelo, function(response){
      res.send(response);
    })
  })  
  
  router.delete('/:id', (req, res)=>{
    const idVuelo = req.params.id;
    dbV.deleteVuelo(idVuelo, function(response){
      res.send(response);
    })
  })

  module.exports = router;