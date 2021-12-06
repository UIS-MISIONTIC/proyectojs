const express = require('express');

const app = express();

const cors = require('cors');

const apiRoutes = require('./routes');

//const port = 4000; 
const port = process.env.PORT || 8080;

//app.use(express.static('public'));

app.use(express.json());

app.use(cors());

apiRoutes(app);

app.listen(port, () =>{

    console.log("Server is running CHOOSED HEROKU port ok");
});