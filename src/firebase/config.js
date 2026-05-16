import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDthe58EjmcwI-gQZr4syQb6pUQ1Jhc7JM",
  authDomain: "proyecto-final-medina-5a7ab.firebaseapp.com",
  projectId: "proyecto-final-medina-5a7ab",
  storageBucket: "proyecto-final-medina-5a7ab.firebasestorage.app",
  messagingSenderId: "453730282009",
  appId: "1:453730282009:web:200ae9963a5bf61c419888"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos
export const db = getFirestore(app);