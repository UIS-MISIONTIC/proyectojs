const dbP = require('./firebase.js');

// Read all of documents from a collection

function getPasajeroAll(callback){

    return dbP.collection("pasajero").get()
    .then((refDoc) => {

        var arrayPasajero = [];
        refDoc.forEach((doc) => {
            arrayPasajero.push(doc.data());
            // doc.data() is never undefined for query doc Arrays
            // console.log(doc.id, " => ", doc.data());
        })
        callback(arrayPasajero);
    })
    .catch(err => {
            //console.error(`Error getting documents: ${err}`);
            callback(`Error getting documents: ${err}`);
        });
}

// Read one document from a collection

function getPasajero(idPasajero, callback){
    return dbP.collection('pasajero').doc(idPasajero).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback(`Error getting a document from pasajero: ${err}`);

    })
}

// Create or insert a document into collection

function addPasajero(pasajero, callback){
    return dbP.collection('pasajero').add(pasajero)
    .then(()=>{
        callback('Pasajero y datos adicionales agregados exitosamente')
    })
    .catch(()=>{
        callback(`Error adding the voyager: ${err}`);
    })
}

// Update replacing data

function updatePasajeroEntire(idPasajero, pasajero, callback){
    return dbP.collection('pasajero').doc(idPasajero).set(pasajero)
    .then(()=>{
        callback("The entire voyager successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the voyager: ${err}`);
    })
}

// Update replacing specific data

function updatePasajeroPart(idPasajero, pasajero, callback){
    return dbP.collection('pasajero').doc(idPasajero).update(pasajero)
    .then(()=>{
        callback("Part of voyager successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the voyager: ${err}`);
    })
}

// Remove a document

function deletePasajero(idPasajero, callback){
    return dbP.collection('pasajero').doc(idPasajero).delete()
    .then(()=>{
        callback("Voyager successfully removed")
    })
    .catch(()=>{
        callback(`Error deleting the voyager: ${err}`);
    })
}

//Falta busqueda por pasajero

module.exports = {
    getPasajeroAll,
    getPasajero,
    addPasajero,
    updatePasajeroEntire,
    updatePasajeroPart,
    deletePasajero
}