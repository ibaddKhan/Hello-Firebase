import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDtr2yN0ab6cO6llzMpnTPsaccp076-IVE",
  authDomain: "login-signup-practice-84d0e.firebaseapp.com",
  projectId: "login-signup-practice-84d0e",
  storageBucket: "login-signup-practice-84d0e.appspot.com",
  messagingSenderId: "442961636433",
  appId: "1:442961636433:web:35e34d71b8431c6c92dc70",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
