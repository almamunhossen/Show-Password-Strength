let password = document.querySelector("#password-input");
let textNote = document.querySelector("#text-note");
let message = document.querySelector("#message");

password.addEventListener("input", function () {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (password.value.length < 5) {
    textNote.innerHTML = "Weak";
    password.style.borderColor = "red";
    message.style.color = "red";
  } else if (password.value.length >= 5 && password.value.length < 8) {
    textNote.innerHTML = "medium";
    password.style.borderColor = "yellow";
    message.style.color = "yellow";
  } else {
    textNote.innerHTML = "Strong";
    password.style.borderColor = "lightgreen";
    message.style.color = "lightgreen";
  }
});

//call function Show Password
// function showPassword() {
//   // x.preventDefault();
//   if (password.type === "password") {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// }
// showPassword();
let showPassword = document.querySelector("#show-password");
showPassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
