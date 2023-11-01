import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const passs = document.querySelector(".pass");
const emaill = document.querySelector(".email");

const form = document.querySelector("form");
const monkeyWindow = document.getElementById("monkey-window");
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pass = passs.value;
  const email = emaill.value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);
    console.log(res.user);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Successfully Logged in",
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
