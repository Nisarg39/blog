import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbSLPazrSDQ8YowXXYrR18aJo4x8Ldsik",
    authDomain: "blog-b084e.firebaseapp.com",
    projectId: "blog-b084e",
    storageBucket: "blog-b084e.appspot.com",
    messagingSenderId: "168987192027",
    appId: "1:168987192027:web:61c0faa2197213a5edfafe"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedatabase = getFirestore(app);

export const db= firedatabase;