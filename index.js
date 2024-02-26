let todos = [
    {
        title: "walk more",
        description: "10 mins walk"
    },
    {
        title: "take a break",
        description: "go outside and touch grass!"
    },

]
const ul = document.createElement("ul")
const form = document.getElementById("add-todo")
const deleteAllBtn = document.getElementById("delete-all")

function renderTodos(array) {
    ul.innerHTML = ""
    const container = document.querySelector(".container")
    
    ul.classList.add("todos")
    container.appendChild(ul)

array.forEach((task) => {
  const li = document.createElement("li")
  const title = document.createElement("span")
  const description = document.createElement("p")
    const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "Delete"
  deleteBtn.classList.add("btn", "delete-btn")

  deleteBtn.addEventListener("click", (e) => {
    const todo = e.target.parentNode
    const selectedTodo = todo.querySelector("span").textContent
    

    removeTodo(selectedTodo)
  })

  renderDeleteBtn(li)

  li.classList.add("todo")
  title.textContent = task.title
  description.textContent = task.description

  li.append(title, description)
  li.appendChild(deleteBtn)
  ul.appendChild(li)
    })
}

    function renderDeleteBtn() {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener = ("click",(e) => {
    const selectedTodo = e.target.previousSibling.textContent

        removeTodo(selectedTodo)
    })
}

function addTodo(value) {
    const ul = document.querySelector(".todos")
    const li = document.createElement("li")
    const title = document.createElement("span")
    const description = document.createElement("p")
    const deleteBtn = document.createElement("button")
    const todo = {
        title: value,
        description:"to be changed"
    }
    
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("btn","delete-btn")
    
    deleteBtn.addEventListener("click", (e) => {
        const todo = e.target.parentNode
        const selectedTodo = todo.querySelector("span").textContent
        
        removeTodo(selectedTodo)
    })

    todos.push(todo)
    
    

    li.classList.add("todo")
    title.textContent = todo.title
    description.textContent = todo.description

    li.appendChild(title)
    li.appendChild(description)
    li.appendChild(deleteBtn)
    ul.appendChild(li)
    }

//const addTodoBtn = document.querySelector("#submit-btn")
//console.log("addTodoBtn:",addTodoBtn)

//addTodoBtn.addEventListener("click",function () {
    

//const value = document.querySelector(".todo-input")
//const ul = document.querySelector(".todos")

//const li = document.createElement('li')
    //li.classList.add("todo")
    //li.textContent = value

   // ul.appendChild(li) 
//})

function removeTodo(selectedTodo) {
   const filteredTodo = todos.filter((todo)=> {
    return todo.title !== selectedTodo
    })
    

    todos = filteredTodo 
    renderTodos(filteredTodo)
}

function checkBox(selectedTodo) {
    let checkBox = document.getElementById("checklist");
    let text = document.getElementById("text");

    if(checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
} 
    
    

form.addEventListener("submit", (e) => {
    const value = document.querySelector(".todo-input").value
    addTodo(value)
    
    e.preventDefault()
    })

deleteAllBtn.addEventListener("click", () => {
    todos = []
    renderTodos(todos)
})    
window.addEventListener("load", () => {
    renderTodos(todos)
})
