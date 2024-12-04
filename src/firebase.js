import { initializeApp } from "firebase/app";
import Cookies from "js-cookie";
import { setDoc, doc, serverTimestamp, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJGjirlR8VvTLLuCEDGgNgHP4SkT97qmE",
    authDomain: "fitverse-e33df.firebaseapp.com",
    projectId: "fitverse-e33df",
    storageBucket: "fitverse-e33df.firebasestorage.app",
    messagingSenderId: "736001503986",
    appId: "1:736001503986:web:f72330493f7f56cc43166b",

  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);