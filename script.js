// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgnBadahlAkBQ0g0X72KJVdsLebBxSBKc",
  authDomain: "documents-88731.firebaseapp.com",
  projectId: "documents-88731",
  storageBucket: "documents-88731.appspot.com",
  messagingSenderId: "872211037674",
  appId: "1:872211037674:web:1d22955013e7ccfd018693",
  measurementId: "G-6Q751M1T12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);