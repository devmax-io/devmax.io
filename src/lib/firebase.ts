import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCaZka22LwvhrbtZOjLlx-CyCGk2y0ImYo",
    authDomain: "devmax-io.firebaseapp.com",
    projectId: "devmax-io",
    storageBucket: "devmax-io.appspot.com",
    messagingSenderId: "412114341383",
    appId: "1:412114341383:web:4631a1e8733d7b5322a4a2",
    measurementId: "G-T03TQ74785"
  };

  // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const db = getFirestore();
    export const auth = getAuth();
    export const storage = getStorage();
    