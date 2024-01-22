import { getAuth } from 'firebase/auth';
import "firebase/auth";

import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAtfUJwkk4PGvn2P9_PgdTACnZ6kTtfRIk",
    authDomain: "pet-care-dg.firebaseapp.com",
    projectId: "pet-care-dg",
    storageBucket: "pet-care-dg.appspot.com",
    messagingSenderId: "461214416865",
    appId: "1:461214416865:web:085514cead3245347f9ca0",
    measurementId: "G-YCMY8KNCC0"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const db = getFirestore(app);
export const db = getFirestore(app);


export default firebaseConfig;