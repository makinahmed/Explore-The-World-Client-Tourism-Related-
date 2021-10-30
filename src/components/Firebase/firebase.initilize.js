import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

export  const firebaseInitilizeApp = () => initializeApp(firebaseConfig);