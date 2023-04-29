// 사용할 html tag variable 정의.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginName = document.querySelector("#login-name");

// loginForm submit 시, 호출할 function 선언.
function handleLogin(submit) {
  // submit 시, 새로고침 방지
  submit.preventDefault();
  // localStorage에 username 저장.
  localStorage.setItem("username", JSON.stringify(loginInput.value));
  // login 시, input "hidden" class 추가.
  loginForm.classList.add("hidden");
  // 저장한 username variable로 불러오기.
  const userName = JSON.parse(localStorage.getItem("username"));
  // login 시, 저장한 username 출력.
  loginName.innerText = `${userName}`;
}

// loginForm event listen.
loginForm.addEventListener("submit", handleLogin);
