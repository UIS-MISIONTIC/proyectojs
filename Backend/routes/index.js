const routerCiudad = require('./ciudadRoutes.js');

const routerPasajero = require('./pasajeroRoutes.js');

function apiRoutes (app){
    app.use('/ciudad', routerCiudad);
    app.use('/pasajero', routerPasajero);
}

module.exports = apiRoutes;