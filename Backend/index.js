const express = require('express');

const app = express();

const cors = require('cors');

const apiRoutes = require('./routes');

const port = 4000;

app.use(express.static('public'));

app.use(express.json());

app.use(cors());

apiRoutes(app);

app.listen(port, () =>{
    
    console.log("Server is running into 4000 port ok");
});