// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9isLZKQiV6xBP6JFGfzVrqd02cu0pEAk",
  authDomain: "ticketmaster-e71c2.firebaseapp.com",
  projectId: "ticketmaster-e71c2",
  storageBucket: "ticketmaster-e71c2.firebasestorage.app",
  messagingSenderId: "1087228874399",
  appId: "1:1087228874399:web:12770784891b184bde9caa",
  measurementId: "G-V3JK5BJEWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore + Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
