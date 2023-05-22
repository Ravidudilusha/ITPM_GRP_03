// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZd8jxou1EqkC2wI9VLsYAV1XteqKQ6xc",
  authDomain: "fisharea-acba6.firebaseapp.com",
  projectId: "fisharea-acba6",
  storageBucket: "fisharea-acba6.appspot.com",
  messagingSenderId: "606248907465",
  appId: "1:606248907465:web:fac4b2d4f850a927c5d318",
  measurementId: "G-GS6F7VZF5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

