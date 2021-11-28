const dbU = require('./firebase.js');

// Read all of documents from a collection

function getUsersAll(callback){

    return dbU.collection("users").get()
    .then((refDoc) => {

        var arrayUsers = [];
        refDoc.forEach((doc) => {
            arrayUsers.push(doc.data());
            // doc.data() is never undefined for query doc Arrays
            // console.log(doc.id, " => ", doc.data());
        })
        callback(arrayUsers);
    })
    .catch(err => {
            //console.error(`Error getting documents: ${err}`);
            callback(`Error getting documents: ${err}`);
        });
}

// Read one document from a collection

function getUsers(idUsers, callback){
    return dbU.collection('users').doc(idUsers).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback(`Error getting a document from users: ${err}`);

    })
}

// Create or insert a document into collection

function addUsers(users, callback){
    return dbU.collection('users').add(users)
    .then(()=>{
        callback('Usuario y datos adicionales agregados exitosamente')
    })
    .catch(()=>{
        callback(`Error adding the user: ${err}`);
    })
}

// Update replacing data

function updateUsersTotally(idUsers, users, callback){
    return dbU.collection('users').doc(idUsers).set(users)
    .then(()=>{
        callback("The entire user successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the user: ${err}`);
    })
}

// Update replacing specific data

function updateUsersPart(idUsers, users, callback){
    return dbU.collection('users').doc(idUsers).update(users)
    .then(()=>{
        callback("Part of user successfully updated")
    })
    .catch(()=>{
        callback(`Error updating the user: ${err}`);
    })
}

// Remove a document

function deleteUsers(idUsers, callback){
    return dbU.collection('users').doc(idUsers).delete()
    .then(()=>{
        callback("User successfully removed")
    })
    .catch(()=>{
        callback(`Error deleting the user: ${err}`);
    })
}

//Falta busqueda por usuarios

module.exports = {
    getUsersAll,
    getUsers,
    addUsers,
    updateUsersTotally,
    updateUsersPart,
    deleteUsers
}