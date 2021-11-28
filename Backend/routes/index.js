const routerCiudad = require('./ciudadRoutes.js');

const routerPasajero = require('./pasajeroRoutes.js');

const routerUsers = require('./usersRoutes.js');

const routerVuelo = require('./vueloRoutes.js');

function apiRoutes (app){
    app.use('/ciudad', routerCiudad);
    app.use('/pasajero', routerPasajero);
    app.use('/users', routerUsers);
    app.use('/vuelo', routerVuelo);
}

module.exports = apiRoutes;