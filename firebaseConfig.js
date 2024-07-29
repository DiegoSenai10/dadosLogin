// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "dadoslogin-39ada.firebaseapp.com",
    projectId: "dadoslogin-39ada",
    storageBucket: "dadoslogin-39ada.appspot.com",
    messagingSenderId: "324843618728",
    appId: "1:324843618728:web:a036dc27b09b04f5eedd9d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth, firestore }