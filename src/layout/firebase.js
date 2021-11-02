import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDgC6LS10yy8Wm58gzsz2Ooih-e5vUQoFg",
    authDomain: "hymns-9f0bf.firebaseapp.com",
    projectId: "hymns-9f0bf",
    storageBucket: "hymns-9f0bf.appspot.com",
    messagingSenderId: "813731407507",
    appId: "1:813731407507:web:94a605be8a6ea8b5828f66",
    measurementId: "G-TEVWS02D0N"
  };

!firebase.apps.length ?
firebase.initializeApp(firebaseConfig):firebase.app()
const db=firebase.firestore()
// Initialize Firebase
 export { firebase,db}