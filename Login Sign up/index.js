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
    removeBoxShadow();
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

const monkeyDiv = document.querySelector(".monkeyDiv");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user, "is logged in");
  } else {
    setTimeout(() => {
      const openModal = document.getElementById('openModal');
      const closeModal = document.getElementById('closeModal');
      const modal = document.querySelector('.modal');

      openModal.addEventListener('click', () => {
          modal.classList.add('opacity-100', 'pointer-events-auto');
      });

      closeModal.addEventListener('click', () => {
          modal.classList.remove('opacity-100', 'pointer-events-auto');
      }); 
    }, 3000);
    console.log("not logged in");
  }
});

const SignOut = document.querySelector(".out");
SignOut.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Signed out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error, "Not out");
    });
});
