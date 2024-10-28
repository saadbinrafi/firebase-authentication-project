// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgOVy3qaXo3HIs8AYQ7FLD0klP9C0yiC8",
  authDomain: "authentication-prac-project.firebaseapp.com",
  projectId: "authentication-prac-project",
  storageBucket: "authentication-prac-project.appspot.com",
  messagingSenderId: "712128241218",
  appId: "1:712128241218:web:b8d89589b8acb91cab17db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);