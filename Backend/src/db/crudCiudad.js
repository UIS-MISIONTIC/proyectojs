const db = require('./firebase.js');

// Read all of documents from a collection

function getAerolinea(callback){

    return db.collection("ciudad").get()
    .then((refDoc) => {

        var arrayAerolinea = [];
        refDoc.forEach((doc) => {
            arrayAerolinea.push(doc.data());
            // doc.data() is never undefined for query doc Arrays
            // console.log(doc.id, " => ", doc.data());
        })
        callback(arrayAerolinea);
    })
    .catch(err => {
            //console.error(`Error getting documents: ${err}`);
            callback(`Error getting documents: ${err}`);
        });
}

// Read one document from a collection

function getCiudad(idCiudad, callback){
    return db.collection('ciudad').doc(idCiudad).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback(`Error getting a document from ciudad: ${err}`);

    })
}

// Create or insert a document into collection

function addCiudad(ciudad, callback){
    return db.collection('ciudad').add(ciudad)
    .then(()=>{
        callback('Ciudad y datos adicionales agregados exitosamente')
    })
    .catch(()=>{
        callback(`Error adding the city: ${err}`);
    })
}

// Update replacing data

function updateCiudadTotally(idCiudad, ciudad, callback){
    return db.collection('ciudad').doc(idCiudad).set(ciudad)
    .then(()=>{
        callback("The entire city successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the city: ${err}`);
    })
}

// Update replacing specific data

function updateCiudadPart(idCiudad, ciudad, callback){
    return db.collection('ciudad').doc(idCiudad).update(ciudad)
    .then(()=>{
        callback("Part of city successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the city: ${err}`);
    })
}

// Remove a document

function deleteCiudad(idCiudad, callback){
    return db.collection('ciudad').doc(idCiudad).delete()
    .then(()=>{
        callback("City successfully removed")
    })
    .catch(()=>{
        callback(`Error deleting the city: ${err}`);
    })
}

//Falta busqueda por ciudad

module.exports = {
    getAerolinea,
    getCiudad,
    addCiudad,
    updateCiudadTotally,
    updateCiudadPart,
    deleteCiudad
}