// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGoIbr5Z1Cy-XZZcDtXPHBjARxBxtM0mE",
  authDomain: "myfirst-801be.firebaseapp.com",
  projectId: "myfirst-801be",
  storageBucket: "myfirst-801be.firebasestorage.app",
  messagingSenderId: "601909691924",
  appId: "1:601909691924:web:986a93f7eb6606edda0901",
  measurementId: "G-HBE0SLCNGD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
