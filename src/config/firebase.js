
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6CFiQ9JDJ1RClgylH0V1aFlw2n_Tv04",
  authDomain: "viacerta-abroad.firebaseapp.com",
  projectId: "viacerta-abroad",
  storageBucket: "viacerta-abroad.firebasestorage.app",
  messagingSenderId: "327722696275",
  appId: "1:327722696275:web:8d1840d02bb36f87d5d0a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;