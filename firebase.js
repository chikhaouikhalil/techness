// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4askYg3H-m2-UMZ2Wlvf-AY2L-0Ubf14",
  authDomain: "formatika-techness.firebaseapp.com",
  projectId: "formatika-techness",
  storageBucket: "formatika-techness.appspot.com",
  messagingSenderId: "486212639964",
  appId: "1:486212639964:web:37f5becab80c2a7e61e819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
