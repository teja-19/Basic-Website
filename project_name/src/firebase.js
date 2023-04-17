import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUtUi2ofvIR3Iq2UFP40g7p2TEAh7crbQ",
  authDomain: "react-auth-bc7f6.firebaseapp.com",
  projectId: "react-auth-bc7f6",
  storageBucket: "react-auth-bc7f6.appspot.com",
  messagingSenderId: "69988058735",
  appId: "1:69988058735:web:8d4e8dd45968fa9fc96f9a",
  measurementId: "G-BWNF8YG0FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;