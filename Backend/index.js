const express = require('express');

const app = express();

const db = require('./src/db/crudCiudad.js');

app.use(express.static('public'));

//app.use(express.json());

app.get('/Welcome', function (req, res) {
    res.send('Bienvenido a la pagina oficial de aerolineas vuelaFacil')
  });

app.get('/Any-Interface', function (req, res) {
res.send('This is for getting any interface')
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
   
//app.listen(3000);
//   console.log("Server is running ok");

// db.getAerolinea();

// var app = require('./app');
var port = 4000;
app.listen(port, () =>{
    console.log("Server is running into 4000 port ok");
});
