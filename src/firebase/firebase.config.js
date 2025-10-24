// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8XElKCGpTC-c2vPOAh7vFBHS3v7Yl2lc",
  authDomain: "a8-green-nest.firebaseapp.com",
  projectId: "a8-green-nest",
  storageBucket: "a8-green-nest.firebasestorage.app",
  messagingSenderId: "509006905409",
  appId: "1:509006905409:web:9bf2ffd6cb415a0de8c6c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;