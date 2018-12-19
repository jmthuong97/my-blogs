const admin = require('firebase-admin');
require('firebase/firestore');
const serviceAccount = require("../config/serviceAccountKey.json");

const FirebaseAdmin = !admin.apps.length ?
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://my-blogs-abda3.firebaseio.com"
    }) : admin.app();

const Firestore = FirebaseAdmin.firestore();
Firestore.settings({
    timestampsInSnapshots: true
});

module.exports = {
    FirebaseAdmin,
    Firestore
};