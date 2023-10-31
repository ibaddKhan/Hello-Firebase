import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const pass = document.querySelector(".pass");
const email = document.querySelector(".email");
const form = document
  .querySelector("form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        email.value,
        pass.value
      );
      console.log(res.user);
      console.log("Successfully Logged in");
    } catch (error) {
      const errorCode = error.code;
      console.log(error.title);
    }
  });
