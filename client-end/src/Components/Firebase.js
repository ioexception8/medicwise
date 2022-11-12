import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    databaseURL: "YOUR_FIREBASE_DATABASE_URL",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID",
});

const db = firebaseApp.firestore();

export { db };
