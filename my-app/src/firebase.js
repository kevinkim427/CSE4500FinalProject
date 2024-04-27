// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMGIdF9DafGPVwHtVry5bil1bvwnZ8AUc",
  authDomain: "tracker-e9548.firebaseapp.com",
  projectId: "tracker-e9548",
  storageBucket: "tracker-e9548.appspot.com",
  messagingSenderId: "899793068517",
  appId: "1:899793068517:web:91f890f0038ab5e6e4cf0c",
  measurementId: "G-46XB3P716Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);