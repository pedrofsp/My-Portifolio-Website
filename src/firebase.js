// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy_lwfHuTQroF4JSaabKXNn2gBAF01diY",
  authDomain: "portifolio-website-b2b51.firebaseapp.com",
  databaseURL: "https://portifolio-website-b2b51-default-rtdb.firebaseio.com",
  projectId: "portifolio-website-b2b51",
  storageBucket: "portifolio-website-b2b51.appspot.com",
  messagingSenderId: "45527413556",
  appId: "1:45527413556:web:05e3a4de777cb6d2a6ab61",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
