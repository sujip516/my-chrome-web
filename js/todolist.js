// 사용할 html tag variable 정의.
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.querySelector("#todo-ul");
const image = ["9.png"];

// li와 btnImg 생성 및 btnImg click 시, li remove function 선언.
function addList(text) {
  // li, btnImg variable 정의.
  const li = document.createElement("li");
  const btnImg = document.createElement("img");
  // btnImg 소스 & li.innerText
  btnImg.src = `img/${image}`;
  li.innerText = text;
  // btnImg li 안에 넣기, li todoUl 안에 넣기.
  li.appendChild(btnImg);
  todoUl.appendChild(li);

  // btnImg click 시, 호출할 function 선언.
  function deleteList() {
    // li & localStorage item remove.
    li.remove();
    localStorage.removeItem("todo");
  }
  // btnImg event listen.
  btnImg.addEventListener("click", deleteList);
}

// todoInput value 가져오는 function 선언.
function getInputValue(event) {
  // submit 시, 새로고침 방지(=생성된 li 유지)
  event.preventDefault();
  // todoInput.value variable 정의.
  const listValue = todoInput.value;
  // localStorage에 listValue 저장.
  localStorage.setItem("todo", JSON.stringify(listValue));

  // addList argument에 저장한 listValue 가져오기.
  addList(JSON.parse(localStorage.getItem("todo")));
  // submit 시, input value 비워두기.
  todoInput.value = "";
}

// todoForm event listen.
todoForm.addEventListener("submit", getInputValue);
