// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZg6xn7mGcS3Mct83k8R-EPJ1bxZ4MTRI",
  authDomain: "netflixgpt-348e4.firebaseapp.com",
  projectId: "netflixgpt-348e4",
  storageBucket: "netflixgpt-348e4.appspot.com",
  messagingSenderId: "214197721873",
  appId: "1:214197721873:web:3e460b6063d64e757d8ab0",
  measurementId: "G-WE4MZNWQCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
