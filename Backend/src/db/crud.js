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
module.exports = {

    getAerolinea
}