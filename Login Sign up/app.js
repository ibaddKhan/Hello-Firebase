import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const emaill = document.querySelector(".email");
const password = document.querySelector(".pass");

const form = document
  .querySelector("form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emaill.value;
    const pass = password.value;

    console.log(email);
    console.log(pass);
    console.log("Working");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(res.user);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Account Created",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location = "./index.html";
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
    }

    emaill.value = "";
    password.value = "";
  });
