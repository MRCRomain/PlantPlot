// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuBMaV5KohIoEbPccAm7xlBvBjjg1lvJo",
  authDomain: "plantplot-7de1e.firebaseapp.com",
  projectId: "plantplot-7de1e",
  storageBucket: "plantplot-7de1e.appspot.com",
  messagingSenderId: "701029794007",
  appId: "1:701029794007:web:f93fc3f776558bb742f092",
  measurementId: "G-888W8KFB3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);