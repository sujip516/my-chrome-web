const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginName = document.querySelector("#login-name");

function handleLogin(submit) {
  submit.preventDefault();
  localStorage.setItem("username", JSON.stringify(loginInput.value));
  const userName = JSON.parse(localStorage.getItem("username"));
  loginName.innerText = `${userName}`;
}

loginForm.addEventListener("submit", handleLogin);
