// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAImraXWVlqsRxQ8-B8fkJ0frxivT-vQOY",
  authDomain: "otpverification-c163f.firebaseapp.com",
  projectId: "otpverification-c163f",
  storageBucket: "otpverification-c163f.appspot.com",
  messagingSenderId: "729267419405",
  appId: "1:729267419405:web:dec190f31cf2bbbe1d5844",
  measurementId: "G-R9CRS9WS4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const analytics = getAnalytics(app);