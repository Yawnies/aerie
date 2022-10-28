// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDaJoziGHqUzBSVYFIFuh1aq7Lx5GnkZ_w",

  authDomain: "aerie-6a1e9.firebaseapp.com",

  projectId: "aerie-6a1e9",

  storageBucket: "aerie-6a1e9.appspot.com",

  messagingSenderId: "898513549161",

  appId: "1:898513549161:web:6dbd6a9a262b829e342ff8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // export default {db} exports AN OBJECT and not the actual db variable, which is why it does not work