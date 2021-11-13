const admin = require('firebase-admin');


const serviceAccount = require('./vuelafacil2021-fd081e754bb2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

//Create a document

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });


// Add a new document in collection "ciudad" 

//Si el documento no existe, se creará. Si el documento existe, su contenido se reemplazará con los datos proporcionados, 
//a menos que especifiques que los datos se deberían combinar en el documento existente, de la siguiente manera:

// var cityRef = db.collection('ciudad').doc('BJ');

// var setWithMerge = cityRef.set({
//     capital: true
// }, { merge: true });

// db.collection("ciudad").doc("01").set({
//     ciAeropuerto: "Rio Negro",
//     ciNombre: "Medellin",
//     ciPais: "Colombia"
// })
// .then(() => {
//     console.log("Document successfully written!");
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });

//Update a document

db.collection("ciudad").doc("01").update({
    ciAeropuerto: "Aeropuerto de Rio Negro",
    ciNombre: "Medellin",
    ciPais: "Colombia"
 })
.then(() => {
    console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
var app = require('./app');
var port = 4000;
app.listen(port, () =>{
    console.log("Server is running ok");
});
