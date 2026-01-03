// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt2rf4Ef2asvupiFNnZfeDzM1VLH9N2MU",
  authDomain: "react-auth-a50b5.firebaseapp.com",
  projectId: "react-auth-a50b5",
  storageBucket: "react-auth-a50b5.firebasestorage.app",
  messagingSenderId: "732407632632",
  appId: "1:732407632632:web:412fd6c9763cd1d659a10d",
  measurementId: "G-XH28LV187Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
