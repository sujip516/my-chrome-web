const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginName = document.querySelector("#login-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintUsername(username);
}

function paintUsername(username) {
  loginName.innerText = `${username}`;
  loginName.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);
// username 저장, loginInput add "hidden", loginName remove "hidden".
// refresh -> username gone!

const getUsername = localStorage.getItem(USERNAME_KEY);

if (getUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintUsername(getUsername);
}
