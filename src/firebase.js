// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrggIVJbL2vLLPSqIEqUVIJcUu7RSV1c",
  authDomain: "realtor-clone-react-59d37.firebaseapp.com",
  projectId: "realtor-clone-react-59d37",
  storageBucket: "realtor-clone-react-59d37.firebasestorage.app",
  messagingSenderId: "1046931619443",
  appId: "1:1046931619443:web:9c7046d529bc8c3a5c7406"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();