import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("form");
const emaill = document.querySelector("input");

const newEmail = localStorage.getItem("email");

emaill.value = newEmail;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendPasswordResetEmail(auth, emaill.value)
    .then(() => {
      console.log("email sent");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Email Sent",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location = "./login.html";
      }, 2000);
    })
    .catch((error) => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error.code,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(error);
    });
});
