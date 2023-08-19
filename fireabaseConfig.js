import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDiQe1ePRF7GXEB8gwtTPX0FeMbeZBQZLk",
  authDomain: "fir-prac-4a71d.firebaseapp.com",
  projectId: "fir-prac-4a71d",
  storageBucket: "fir-prac-4a71d.appspot.com",
  messagingSenderId: "768989331440",
  appId: "1:768989331440:web:b45f055f4729bad0eae735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, db, doc, getDoc, onAuthStateChanged }