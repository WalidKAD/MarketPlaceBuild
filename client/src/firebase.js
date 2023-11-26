// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9a2b3.firebaseapp.com",
  projectId: "mern-estate-9a2b3",
  storageBucket: "mern-estate-9a2b3.appspot.com",
  messagingSenderId: "890502892244",
  appId: "1:890502892244:web:d54d5c47313d8917120941",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
