import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkcu0EAMh4sqBVKTdCKe-RaTMhcZrS66g",
  authDomain: "board-7d779.firebaseapp.com",
  projectId: "board-7d779",
  storageBucket: "board-7d779.appspot.com",
  messagingSenderId: "77809415056",
  appId: "1:77809415056:web:01a215922e90b4b3f17915",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
