import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line 
const FirebaseConfig = {
    apiKey: "AIzaSyCWGzuwukIiM2gZ5qyv_v8JpPmfpPakeag",
    authDomain: "clone-2e3d1.firebaseapp.com",
    databaseURL: "https://clone-2e3d1.firebaseio.com",
    projectId: "clone-2e3d1",
    storageBucket: "clone-2e3d1.appspot.com",
    messagingSenderId: "986299305282",
    appId: "1:986299305282:web:31cbf15b56b0948189ccdb",
    measurementId: "G-3QT7JNRVG7"
  };

  const firebaseApp  = firebase.initializeApp(FirebaseConfig);
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const db = firebaseApp.firestore();
 const auth =firebase.auth();

 export {db,auth};