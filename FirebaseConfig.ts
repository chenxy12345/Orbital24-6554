// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app';
import { getStorage, ref } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKv1eV0uWRzU0j08jLD3FXdtDtisxQ-aw",
  authDomain: "agradebrainbuddies.firebaseapp.com",
  projectId: "agradebrainbuddies",
  storageBucket: "agradebrainbuddies.appspot.com",
  messagingSenderId: "681243393680",
  appId: "1:681243393680:web:0c0f2859fc3b558680e215"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} 
export const FIREBASE_AUTH = getAuth();
export const FIRESTORE_DB = getFirestore();
export const FIREBASE_DB = getDatabase();
export const storage = getStorage();
export { firebase };