// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDCcWApisjjvvEnCnNPK8XlZU8ebbEto",
  authDomain: "devcamp-r25-9fc47.firebaseapp.com",
  projectId: "devcamp-r25-9fc47",
  storageBucket: "devcamp-r25-9fc47.appspot.com",
  messagingSenderId: "448987080884",
  appId: "1:448987080884:web:b5809f85288118d3b20fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;