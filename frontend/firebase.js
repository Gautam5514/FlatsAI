// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByJltAeyfs8q9Kf1AprI7EtoMqiptZbns",
    authDomain: "flatsai-cf6f5.firebaseapp.com",
    projectId: "flatsai-cf6f5",
    storageBucket: "flatsai-cf6f5.firebasestorage.app",
    messagingSenderId: "769245160165",
    appId: "1:769245160165:web:20bfc6fb08cce10e7aea0c",
    measurementId: "G-E2SPLMJ8XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };