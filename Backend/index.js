const db = require('./src/db/crud.js');


db.getAerolinea();

var app = require('./app');
var port = 4000;
app.listen(port, () =>{
    console.log("Server is running ok");
});
