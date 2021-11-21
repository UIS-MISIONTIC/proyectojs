const express = require('express');

const app = express();

const db = require('./src/db/crudCiudad.js');

const dbP = require('./src/db/crudPasajero.js');

//app.use(express.static('public'));

app.use(express.json());

app.get('/Welcome', function (req, res) {
    res.send('Bienvenido a la pagina oficial de aerolineas vuelaFacil')
  });

app.get('/Any-GUI', function (req, res) {
res.send('This is for getting any GUI')
  });

app.get('/getAerolinea', function(req, res){

  db.getAerolinea(function(arrayAerolinea){

    res.send(arrayAerolinea);

  })

});

app.get('/getCiudad/:id', function(req, res){
  const idCiudad = req.params.id;
  db.getCiudad(idCiudad, function(ciudad){
    res.json(ciudad);
  })
})

app.post('/addCiudad', (req, res)=>{
  const ciudad = req.body;
  db.addCiudad(ciudad, function(response){
    res.send(response);
  })
})

 app.put('/updateCiudadTotally/:id', (req, res)=>{
   const idCiudad = req.params.id;
   const ciudad = req.body;
   db.updateCiudadTotally(idCiudad, ciudad, function(response){
     res.send(response);
   })
 })  

 app.patch('/updateCiudadPart/:id', (req, res)=>{
  const idCiudad = req.params.id;
  const ciudad = req.body;
  db.updateCiudadPart(idCiudad, ciudad, function(response){
    res.send(response);
  })
})  

app.delete('/deleteCiudad/:id', (req, res)=>{
  const idCiudad = req.params.id;
  db.deleteCiudad(idCiudad, function(response){
    res.send(response);
  })
})

app.get('/getPasajeroAll', function(req, res){

  dbP.getPasajeroAll(function(arrayPasajero){

    res.send(arrayPasajero);

  })

});

app.get('/getPasajero/:id', function(req, res){
  const idPasajero = req.params.id;
  dbP.getPasajero(idPasajero, function(pasajero){
    res.json(pasajero);
  })
})

app.post('/addPasajero', (req, res)=>{
  const pasajero = req.body;
  dbP.addPasajero(pasajero, function(response){
    res.send(response);
  })
})

 app.put('/updatePasajeroEntire/:id', (req, res)=>{
   const idPasajero = req.params.id;
   const pasajero = req.body;
   dbP.updatePasajeroEntire(idPasajero, pasajero, function(response){
     res.send(response);
   })
 })  

 app.patch('/updatePasajeroPart/:id', (req, res)=>{
  const idPasajero = req.params.id;
  const pasajero = req.body;
  dbP.updatePasajeroPart(idPasajero, pasajero, function(response){
    res.send(response);
  })
})  

app.delete('/deletePasajero/:id', (req, res)=>{
  const idPasajero = req.params.id;
  dbP.deletePasajero(idPasajero, function(response){
    res.send(response);
  })
})
// app.listen(3000);
//   console.log("Server is running ok");

// db.getAerolinea();

//var app = require('./app');

var port = 4000;
app.listen(port, () =>{
    console.log("Server is running into 4000 port ok");
});