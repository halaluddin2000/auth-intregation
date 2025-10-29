// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTdpzna1U8SxM4Z8dNPWm4StsD-nbfxUA",
    authDomain: "auth-intregation-ae5cc.firebaseapp.com",
    projectId: "auth-intregation-ae5cc",
    storageBucket: "auth-intregation-ae5cc.firebasestorage.app",
    messagingSenderId: "803489950417",
    appId: "1:803489950417:web:551fc266534a6dcd78b3f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);