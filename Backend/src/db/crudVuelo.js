const dbV = require('./firebase.js');

// Read all of documents from a collection

function getVueloAll(callback){

    return dbV.collection("vuelo").get()
    .then((refDoc) => {

        var arrayVuelo = [];
        refDoc.forEach((doc) => {
            arrayVuelo.push(doc.data());
            // doc.data() is never undefined for query doc Arrays
            // console.log(doc.id, " => ", doc.data());
        })
        callback(arrayVuelo);
    })
    .catch(err => {
            //console.error(`Error getting documents: ${err}`);
            callback(`Error getting documents: ${err}`);
        });
}

// Read one document from a collection

function getVuelo(idVuelo, callback){
    return dbV.collection('vuelo').doc(idVuelo).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback(`Error getting a document from vuelo: ${err}`);

    })
}

// Create or insert a document into collection

function addVuelo(vuelo, callback){
    return dbV.collection('vuelo').add(vuelo)
    .then(()=>{
        callback('vuelo y datos adicionales agregados exitosamente')
    })
    .catch(()=>{
        callback(`Error adding the flight: ${err}`);
    })
}

// Update replacing data

function updateVueloTotally(idVuelo, vuelo, callback){
    return dbV.collection('vuelo').doc(idVuelo).set(vuelo)
    .then(()=>{
        callback("The entire flight successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the flight: ${err}`);
    })
}

// Update replacing specific data

function updateVueloPart(idVuelo, vuelo, callback){
    return dbV.collection('vuelo').doc(idVuelo).update(vuelo)
    .then(()=>{
        callback("Part of flight successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the flight: ${err}`);
    })
}

// Remove a document

function deleteVuelo(idVuelo, callback){
    return dbV.collection('vuelo').doc(idVuelo).delete()
    .then(()=>{
        callback("Flight successfully removed")
    })
    .catch(()=>{
        callback(`Error deleting the flight: ${err}`);
    })
}

//Falta busqueda por ciudad

module.exports = {
    getVueloAll,
    getVuelo,
    addVuelo,
    updateVueloTotally,
    updateVueloPart,
    deleteVuelo
}