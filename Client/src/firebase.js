// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAeLBLqAQ8dPKxq6Xmv2XHawXHzgU-q8h8",
  authDomain: "rental-862cb.firebaseapp.com",
  projectId: "rental-862cb",
  storageBucket: "rental-862cb.appspot.com",
  messagingSenderId: "152445819143",
  appId: "1:152445819143:web:5c00f03bd8e5655de90da2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export default app;
