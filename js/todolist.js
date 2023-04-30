const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.querySelector("#todo-ul");

const TODOLIST_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoUl.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedToDos = localStorage.getItem(TODOLIST_KEY);

if (savedToDos !== null) {
  const getToDos = JSON.parse(savedToDos);
  toDos = getToDos;
  getToDos.forEach(paintToDo);
}
