// firebaseConfig.js
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBrPxeJOF3LSvbUgNSoxQU9iw4B4y38uoc",
  authDomain: "foodfinder-d01e7.firebaseapp.com",
  projectId: "foodfinder-d01e7",
  storageBucket: "foodfinder-d01e7.appspot.com",
  messagingSenderId: "775708553586",
  appId: "1:775708553586:web:2ac1273dde310803d8edeb",
  measurementId: "G-B7D21EKTEN"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

export { app, db, storage };