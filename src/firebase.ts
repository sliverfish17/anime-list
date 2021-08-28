import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "anime-8d4be.firebaseapp.com",
  projectId: "anime-8d4be",
  storageBucket: "anime-8d4be.appspot.com",
  messagingSenderId: "810152201336",
  appId: "1:810152201336:web:202fbd0424f291456b718d",
  measurementId: "G-PRK95M5GMV",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
