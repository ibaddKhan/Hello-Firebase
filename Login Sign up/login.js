import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const passs = document.querySelector(".pass");
const emaill = document.querySelector(".email");

const form = document
  .querySelector("form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const pass = passs.value;
    const email = emaill.value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, pass);
      console.log(res.user);
      console.log("Successfully Logged in");
    } catch (error) {
      const errorCode = error.code;
      console.log(error.title);
    }
  });
