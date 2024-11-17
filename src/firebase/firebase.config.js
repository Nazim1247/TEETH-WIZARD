// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPuNwKe_gqUw4pJsOHjes4INdpmxx6a_s",
  authDomain: "conceptual-firebase-dd11f.firebaseapp.com",
  projectId: "conceptual-firebase-dd11f",
  storageBucket: "conceptual-firebase-dd11f.firebasestorage.app",
  messagingSenderId: "453265707532",
  appId: "1:453265707532:web:c32521c4bb30df017e5429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);