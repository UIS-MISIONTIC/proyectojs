const db = require('./firebase.js');

// Read all of documents from a collection

function getAerolinea(){

    return db.collection("ciudad").get()
    .then((refDoc) => {
        refDoc.forEach((doc) => {
            // doc.data() is never undefined for query doc Arrays
            console.log(doc.id, " => ", doc.data());
        })
    })
    .catch(err => {
            console.error(`Error getting documents: ${err}`);
        });
}

module.exports = {

    getAerolinea
}