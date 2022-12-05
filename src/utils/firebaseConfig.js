// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1jSJgWSMRHjYrN_bsmycWSsY7vupbSA",
  authDomain: "ecommerce-with-react-99bd5.firebaseapp.com",
  projectId: "ecommerce-with-react-99bd5",
  storageBucket: "ecommerce-with-react-99bd5.appspot.com",
  messagingSenderId: "762363872649",
  appId: "1:762363872649:web:85dc74047a5ca6f588cd58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);