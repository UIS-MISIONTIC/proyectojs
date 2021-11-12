const admin = require('firebase-admin');


const serviceAccount = require('./vuelafacil2021-fd081e754bb2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();



db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});


var app = require('./app');
var port = 4000;
app.listen(port, () =>{
    console.log("Server is running ok");

});
