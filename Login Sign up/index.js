const nightModeToggle = document.getElementById("darkModeToggle");
const toggleContainer = document.getElementById("toggleContainer");
const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const head = document.querySelector(".head");
const nav = document.querySelector(".nav");
const para = document.querySelectorAll(".para");

function toggleNightMode() {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    toggleContainer.classList.add("left-100");
    toggleButton.style.transform = "translateX(100%)";
    body.classList.add("dark");
    addBackgroundToNav();
    head.classList.add("text-gray-800");
    addBackgroundToPara();
  } else {
    addBoxShadow();
    removeBackgroundFromNav();
    toggleContainer.classList.remove("left-4");
    toggleButton.style.transform = "translateX(0)";
    body.classList.remove("dark");
    removeBackgroundFromPara();
  }
}

function addBoxShadow() {
  body.classList.add("shadow-md");
}

function addBackgroundToPara() {
  para.forEach((element) => {
    element.classList.add("bg-gray-200");
  });
}

function removeBackgroundFromPara() {
  para.forEach((element) => {
    element.classList.remove("bg-gray-200");
  });
}
function addBackgroundToNav() {
  nav.classList.add("bg-violet-700");
}

function removeBackgroundFromNav() {
  nav.classList.remove("bg-violet-700");
}

nightModeToggle.addEventListener("change", toggleNightMode);

import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

onAuthStateChanged(auth, (user) => {
  console.log(user);

  if (user) {
    console.log("is logged in as", user.email);
  } else {
    setTimeout(() => {
      const modal = document.querySelector(".modal");

      modal.classList.add("opacity-100", "pointer-events-auto");
    }, 800);
    console.log("not logged in");
  }
  const SignOut = document.querySelector(".out");
  SignOut.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        if (user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Signed Out",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Youre Already Logged Out",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log("Signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error, "Not out");
      });
  });
});
