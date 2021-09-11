const functions = require("firebase-functions");
const admin = require('firebase-admin');
const firebase = require('firebase');
const auth = require('firebase-auth');
const defaultAuth = admin.auth(app);

admin.initializeApp();

const firebaseConfig = {
  apiKey: "AIzaSyDRSDNmpSVTCWhhQE6BtXVEt9e2LAfQ0mw",
  authDomain: "socialmediaapp-35e21.firebaseapp.com",
  projectId: "socialmediaapp-35e21",
  storageBucket: "socialmediaapp-35e21.appspot.com",
  messagingSenderId: "631540683163",
  appId: "1:631540683163:web:5195abaced8098f8cb513e",
  measurementId: "G-6Q64N2Q62C"
};

firebase.initializeApp(firebaseConfig)
const app = require('express')();



app.get('/posts', (req, res) => {
  admin.firestore().collection('posts').orderBy('createdAt', 'desc').get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          body: doc.data().body,
          userTag: doc.data().userTag,
          createdAt: doc.data().createdAt
        })
      });
      return res.json(posts);
    })
    .catch((err) => console.error(err));
})


app.post('/posts',(req, res) => {
  const newPost = {
    body: req.body.body, 
    userTag: req.body.userTag,
    createdAt: new Date().toISOString()
  };
  admin
  .firestore()
  .collection('posts')
  .add(newPost)
  .then((doc) => {
    res.json({ message: `document ${doc.id} created successfully`})
  })
  .catch(err => {
    res.status(500).json({ error: 'Something went wrong'});
    console.error(err);
  })
});


// signup route

app.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    username: req.body.username,
  }
  firebase
  .auth()
  .createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((data) => {
    return res.status(201).json({ message: `user ${data.user.uid} signed up successfully`})
  })
  .catch((err) => {
    console.error(err);
    return res.status(500).json({ error: err.code})
  })
});
exports.api = functions.https.onRequest(app);