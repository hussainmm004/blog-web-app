// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-T_BH44Pm7OI_qjispniHFDx5H7lsiA",
  authDomain: "mohammad-hussain-blog.firebaseapp.com",
  projectId: "mohammad-hussain-blog",
  storageBucket: "mohammad-hussain-blog.appspot.com",
  messagingSenderId: "283150124928",
  appId: "1:283150124928:web:20f701c9263b690338a365",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
