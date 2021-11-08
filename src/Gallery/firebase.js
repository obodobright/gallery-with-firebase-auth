import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnLBIN4e26WH8H4PPd_iWJZjYUslZj9qM",
    authDomain: "gallery-a3049.firebaseapp.com",
    projectId: "gallery-a3049",
    storageBucket: "gallery-a3049.appspot.com",
    messagingSenderId: "720758067595",
    appId: "1:720758067595:web:3991e6a6f99584de8e9f8e",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const fireAuth = getAuth();

export { fireAuth, firestore, app };