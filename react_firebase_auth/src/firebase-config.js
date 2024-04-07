// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EdMPXmntCZN02a1NaDZ31P5yDhhUTRc",
  authDomain: "react-firebase-16bb2.firebaseapp.com",
  projectId: "react-firebase-16bb2",
  storageBucket: "react-firebase-16bb2.appspot.com",
  messagingSenderId: "433121826769",
  appId: "1:433121826769:web:773fb66bdf03bdbebeb2f0",
  measurementId: "G-0L80T37F16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // no need  of this in our case (this for google analytics)


export const auth = getAuth(app);