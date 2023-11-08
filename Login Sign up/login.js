import { signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const password = document.querySelector(".pass");
const emaill = document.querySelector(".email");

const defPass = localStorage.getItem("pass");
const defEmail = localStorage.getItem("email");

password.value = defPass;
emaill.value = defEmail;

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const pass = password.value;
  const email = emaill.value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);

    if (res.user.emailVerified) {
      console.log(res.user);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Successfully Logged in as ${res.user.email}`,
        showConfirmButton: false,
        timer: 1500,
      });

      password.value = "";
      emaill.value = "";
      setTimeout(() => {
        window.location = "./index.html";
      }, 1000);
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Verify First",
        showConfirmButton: false,
        timer: 1500,
      });
      signOut(auth)
    }
  } catch (error) {
    const errorCode = error.code;
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: errorCode,
      showConfirmButton: false,
      timer: 1500,
    });
    password.value = "";
    emaill.value = "";
  }
});
