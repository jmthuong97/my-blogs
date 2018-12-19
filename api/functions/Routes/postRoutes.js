const express = require("express");
const {Firestore} = require('../helpers/FirebaseApp');

const Router = express.Router();
const PostsRef = Firestore.collection('posts');


Router.post('/', (req, res, next) => {
    try {
        PostsRef.add(req.body.new_post)
            .then(newPostRef => res.status(200).send(newPostRef))
    } catch (e) {
        next(e);
    }
});

Router.get('/', (req, res, next) => {
    try {
        let posts = [];
        PostsRef.get().then(snapshot => {
            snapshot.forEach(doc => posts.push(doc.data()));
            res.status(200).send(posts);
        });
    } catch (e) {
        next(e);
    }
});

Router.get('/:id', (req, res, next) => {
    try {
        PostsRef.doc(req.params.id).get().then(post => {
            res.status(200).send(post.data());
        });
    } catch (e) {
        next(e);
    }
});

module.exports = Router;