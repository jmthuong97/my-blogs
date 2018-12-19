const express = require('express');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');

const app = express();
const postRoutes = require('./Routes/postRoutes');
const userRoutes = require('./Routes/userRoutes');

app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );

    if (req.headers.origin) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }

    res.setHeader("Access-Control-Allow-Credentials", true);

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
app.disable('etag');

app.get('/', (req, res) => {
    res.send('Welcome to My Blog API !');
});
app.use("/post", postRoutes);
// app.use("/user", userRoutes);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.api = functions.https.onRequest(app);