const express = require('express');

const app = express();

const apiRoutes = require('./routes');

app.use(express.static('public'));

//app.use(express.json());

apiRoutes(app);

// app.get('/Welcome', function (req, res) {
//     res.send('Bienvenido a la pagina oficial de aerolineas vuelaFacil')
//   });

// app.get('/Any-GUI', function (req, res) {
// res.send('This is for getting any GUI')
//   });


// app.listen(3000);
//   console.log("Server is running ok");

// db.getAerolinea();

//var app = require('./app');

var port = 4000;
app.listen(port, () =>{
    console.log("Server is running into 4000 port ok");
});