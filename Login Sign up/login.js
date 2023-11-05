import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const passs = document.querySelector(".pass");
const emaill = document.querySelector(".email");

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const pass = passs.value;
  const email = emaill.value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);
    console.log(res.user);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Succesfully Logged in as ${res.user.email}`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location = "./index.html";
    }, 1000);
  } catch (error) {
    const errorCode = error.code;
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: errorCode,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  emaill.value = "";
  passs.value = "";
});
