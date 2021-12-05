const admin = require('firebase-admin');

const serviceAccount = require('./vuelafacil2021-fd081e754bb2.json');

admin.initializeApp({
  
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;