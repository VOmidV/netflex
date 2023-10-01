// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY40bCC8aFdwUF_feYnpDS5o5r43Amf4I",
  authDomain: "netflix-cloud-26be2.firebaseapp.com",
  projectId: "netflix-cloud-26be2",
  storageBucket: "netflix-cloud-26be2.appspot.com",
  messagingSenderId: "351652867626",
  appId: "1:351652867626:web:8c97ca384f0a8ddffddd53",
  measurementId: "G-G7N38FFGYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
