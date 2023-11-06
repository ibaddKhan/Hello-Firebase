import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";
const emaill = document.querySelector(".email");
const password = document.querySelector(".pass");
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emaill.value;
  const pass = password.value;

  localStorage.setItem("pass", pass);
  localStorage.setItem("email", email);
  console.log(email);
  console.log(pass);
  console.log("Working");

  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(res.user);
    Swal.fire({
      position: "top-center",
      icon: "info",
      title: "Please verify your email before logging in",
      showConfirmButton: false,
      timer: 3000,
    });

    emaill.value = "";
    password.value = "";
    await sendEmailVerification(auth.currentUser);
    signOut(auth);
    setTimeout(() => {
      window.location = "./login.html";
    }, 1000);
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: error.code,
      showConfirmButton: false,
      timer: 1500,
    });
    emaill.value = "";
    password.value = "";
  }
});
