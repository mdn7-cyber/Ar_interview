
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-72167.firebaseapp.com",
  projectId: "interview-72167",
  storageBucket: "interview-72167.firebasestorage.app",
  messagingSenderId: "144537031402",
  appId: "1:144537031402:web:2a57c8852d5ba6712ffd93"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}