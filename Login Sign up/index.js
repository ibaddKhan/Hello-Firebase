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
