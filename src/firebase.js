import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhN1016nkkwsuVvszgZqaRn96Gb9HIgyI",
  authDomain: "fir-abhi-chat-application.firebaseapp.com",
  projectId: "fir-abhi-chat-application",
  storageBucket: "fir-abhi-chat-application.appspot.com",
  messagingSenderId: "276879577334",
  appId: "1:276879577334:web:ef305c916b9b5a6c729cd7",
  measurementId: "G-D8ZCZXLKXB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
