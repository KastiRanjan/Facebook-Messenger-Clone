import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkcuw3QB8ZNvHbpI5E2qGrRlk7C-OiAjE",
  authDomain: "messanger-clone-e7a6b.firebaseapp.com",
  databaseURL: "https://messanger-clone-e7a6b.firebaseio.com",
  projectId: "messanger-clone-e7a6b",
  storageBucket: "messanger-clone-e7a6b.appspot.com",
  messagingSenderId: "460258099398",
  appId: "1:460258099398:web:299589df60bfb1a59a57c7",
  measurementId: "G-GP15HRYKH5",
});

const db = firebaseApp.firestore();

export default db;
