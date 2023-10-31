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
