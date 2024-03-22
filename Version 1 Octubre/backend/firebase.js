/*import * as firebase from 'firebase/app';
import 'firebase/database';*/
import * as firebase from 'firebase/app';
import * as firestore from 'firebase/firestore';

// Reemplace la siguiente configuración con la configuración de su proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqnpF_ppBXsSawkDiVzYzm2oAV1zLvGWQ",
  authDomain: "prowess-web-database.firebaseapp.com",
  projectId: "prowess-web-database",
  storageBucket: "prowess-web-database.appspot.com",
  messagingSenderId: "519296320778",
  appId: "1:519296320778:web:739cc55990bd1a6e4866f3"
};

const fiapp = firebase.initializeApp(firebaseConfig);
export const fs = firestore.getFirestore(fiapp);
