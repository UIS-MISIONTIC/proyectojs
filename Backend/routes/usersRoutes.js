const express = require('express');

const dbU = require('../src/db/crudUsers.js');

const router = express.Router();

router.get('/', function(req, res){

    dbU.getUsersAll(function(arrayUsers){
  
      res.send(arrayUsers);
  
    })
  
  });
  
  router.get('/:id', function(req, res){
    const idUsers = req.params.id;
    dbU.getUsers(idUsers, function(users){
      res.json(users);
    })
  })
  
  router.post('/', (req, res)=>{
    const users = req.body;
    dbU.addUsers(users, function(response){
      res.send(response);
    })
  })
  
   router.put('/:id', (req, res)=>{
     const idUsers = req.params.id;
     const users = req.body;
     dbU.updateUsersTotally(idUsers, users, function(response){
       res.send(response);
     })
   })  
  
   router.patch('/:id', (req, res)=>{
    const idUsers = req.params.id;
    const users = req.body;
    dbU.updateUsersPart(idUsers, users, function(response){
      res.send(response);
    })
  })  
  
  router.delete('/:id', (req, res)=>{
    const idUsers = req.params.id;
    dbU.deleteUsers(idUsers, function(response){
      res.send(response);
    })
  })

module.exports = router;