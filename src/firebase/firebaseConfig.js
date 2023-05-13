// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrPxeJOF3LSvbUgNSoxQU9iw4B4y38uoc",
  authDomain: "foodfinder-d01e7.firebaseapp.com",
  projectId: "foodfinder-d01e7",
  storageBucket: "foodfinder-d01e7.appspot.com",
  messagingSenderId: "775708553586",
  appId: "1:775708553586:web:2ac1273dde310803d8edeb",
  measurementId: "G-B7D21EKTEN"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = firebase.firestore();
const storage = firebase.storage();

export { app, analytics };