const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginName = document.querySelector("#login-name");
const frontImgDiv = document.querySelector(".front-img");

const HIDDEN_CLASSNAME = "hidden";
const NONE_CLASSNAME = "none";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(NONE_CLASSNAME);
  paintUsername(username);
}

function paintUsername(username) {
  loginName.innerText = `${username} Room`;
  loginName.classList.remove(HIDDEN_CLASSNAME);
  frontImgDiv.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);

const getUsername = localStorage.getItem(USERNAME_KEY);

if (getUsername === null) {
  loginForm.classList.remove(NONE_CLASSNAME);
  frontImgDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintUsername(getUsername);
}
