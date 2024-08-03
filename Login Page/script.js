const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (target) => {
  if (email.value === "") {
    target.preventDefault();
    email_error.innerHTML = "Email ID is required !!!";
  }

  if (password.value === "") {
    target.preventDefault();
    password_error.innerHTML = "Password is required !!!";
  }
});
