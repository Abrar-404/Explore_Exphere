// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7jM8DeKVPD8skB2TfM01Fh7rBX4PYtdo",
  authDomain: "explore-exphere.firebaseapp.com",
  projectId: "explore-exphere",
  storageBucket: "explore-exphere.appspot.com",
  messagingSenderId: "276307353094",
  appId: "1:276307353094:web:924ad050e6d09b7a52ed87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);