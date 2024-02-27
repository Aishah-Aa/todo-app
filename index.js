let todos = [
  {
    title: "walk more",
    description: "10 mins walk",
  },
  {
    title: "take a break",
    description: "go outside and touch grass!",
  },
];
const ul = document.createElement("ul");
const container = document.querySelector(".container");
const taskTitleInput = document.querySelector(".todo-input")
const form = document.getElementById("add-todo");
const deleteAllBtn = document.getElementById("delete-btn");

window.addEventListener("load", () => {
  renderTodos(todos);
});

function addTodo() {
    if (taskTitleInput.value == ""){
        alert('enter task')
    } else {
        const todo = {
            title: taskTitleInput.value,
            description: "to be changed",
          };
          todos.push(todo)
          renderTodos(todos)
    }

  }

function renderTodos(array) {
  ul.innerHTML = "";
  ul.classList.add("todos");
  container.appendChild(ul);

  array.forEach((task) => {
    const li = document.createElement("li");
    li.classList = "task";
    const title = document.createElement("span");
    const description = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("input");
    checkBtn.type = "checkBox";

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "delete-btn");

    deleteBtn.addEventListener("click", (e) => {
      const todo = e.target.parentNode;
      const selectedTodo = todo.querySelector("span").textContent; 
      removeTodo(selectedTodo);
    });


    li.classList.add("todo");
    title.textContent = task.title;
    description.textContent = task.description;
    li.appendChild(checkBtn)
    li.append(title, description);
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    deleteBtn.addEventListener("click", (e) => {
      const todo = e.target.parentNode;
      const selectedTodo = todo.querySelector("span").textContent;

      removeTodo(selectedTodo);
    });

    checkBtn.addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle("done");
    });
  });
}

function removeTodo(selectedTodo) {
  const filteredTodo = todos.filter((todo) => {
    return todo.title != selectedTodo;
  });

  todos = filteredTodo;
  renderTodos(filteredTodo);
}

form.addEventListener("submit", (e) => {
  const value = document.querySelector(".todo-input").value;
  addTodo(value);

  e.preventDefault();
});

deleteAllBtn.addEventListener("click", () => {
    todos = [];
    console.log("deleted");
    renderTodos(todos);
  });
