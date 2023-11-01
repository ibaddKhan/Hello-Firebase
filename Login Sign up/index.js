const nightModeToggle = document.getElementById("darkModeToggle");
const toggleContainer = document.getElementById("toggleContainer");
const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const head = document.querySelector(".head");

function toggleNightMode() {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    toggleContainer.classList.add("left-100");
    toggleButton.style.transform = "translateX(100%)";
    removeBoxShadow();
    body.classList.add("dark");
    head.classList.add("text-gray-800");
  } else {
    body.classList.remove("dark");
    addBoxShadow();
    toggleContainer.classList.remove("left-4");
    toggleButton.style.transform = "translateX(0)";
  }
}
function addBoxShadow() {
  body.classList.add("shadow-md");
}
function removeBoxShadow() {
  body.classList.remove("shadow-md");
}

nightModeToggle.addEventListener("change", toggleNightMode);
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const monkeyWindow = document.getElementById("monkey-window");
    monkeyWindow.classList.remove("hidden");

    const loginButton = document.getElementById("login-button");
    const registerButton = document.getElementById("register-button");

    loginButton.addEventListener("click", function () {
      window.location.href = "login.html";
    });

    registerButton.addEventListener("click", function () {
      window.location.href = "signup.html";
    });
  }, 2000);
});
