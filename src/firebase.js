// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH6i4IHP5kWo6ToynN5SkPm8qnb1hF_XE",
  authDomain: "asknitrr-a7df4.firebaseapp.com",
  projectId: "asknitrr-a7df4",
  storageBucket: "asknitrr-a7df4.appspot.com",
  messagingSenderId: "881891032872",
  appId: "1:881891032872:web:da1cf741874a80925c1a1d",
  measurementId: "G-91NBC3V022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}