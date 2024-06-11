// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d033e.firebaseapp.com",
  projectId: "mern-estate-d033e",
  storageBucket: "mern-estate-d033e.appspot.com",
  messagingSenderId: "12380931485",
  appId: "1:12380931485:web:4e2d5b634fb5a7b52b5b74",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
