import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDYuTpy00OU71eoOqPLNcL4Y0YTJLegI7w",
  authDomain: "e-clone-7e4e6.firebaseapp.com",
  projectId: "e-clone-7e4e6",
  storageBucket: "e-clone-7e4e6.firebasestorage.app",
  messagingSenderId: "51213688370",
  appId: "1:51213688370:web:e534ee37ff3608b28b662b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize authentication
export const auth = getAuth(app);
export const db = getFirestore(app)