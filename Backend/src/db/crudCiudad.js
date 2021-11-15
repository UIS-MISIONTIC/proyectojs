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

function getCiudad(idCiudad, callback){
    return db.collection('ciudad').doc(idCiudad).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback(`Error getting a document from ciudad: ${err}`);

    })
}

function addCiudad(ciudad, callback){
    return db.collection('ciudad').add(ciudad)
    .then(()=>{
        callback('Ciudad y datos adicionales agregados exitosamente')
    })
    .catch(()=>{
        callback(`Error adding the city: ${err}`);
    })
}
module.exports = {
    getAerolinea,
    getCiudad,
    addCiudad
}