let todos = []
const ul = document.createElement("ul")
const form = document.getElementById("add-todo")
const deleteAllBtn = document.getElementById("delete-all")

function renderTodos(array) {
    ul.innerHTML = ""
    const container = document.querySelector(".container")
    
    ul.classList.add("todos")
    container.appendChild(ul)

array.forEach((task) => {
    console.log("task:",task)
  const li = document.createElement("li")
  const span = document.createElement("span") 

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.classList.add("btn", "delete-btn")
    
  deleteBtn.addEventListener("click", (e) => {
    const selectedTodo = e.target.previousSibling.textContent

    removeTodo(selectedTodo)
  })

  renderDeleteBtn(li)
  li.classList.add("todo")
  span.textContent = task

  li.appendChild(span)  
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
    const span = document.createElement("span")
    const deleteBtn = document.createElement("button")
    
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("btn","delete-btn")
    deleteBtn.addEventListener("click", (e) => {
        const selectedTodo = e.target.previousSibling.textContent
        removeTodo(selectedTodo)
    })

    todos.push(value)

    li.classList.add("todo")
    span.textContent = value

    li.appendChild(span)
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
    return todo !== selectedTodo
    })
    ul.innerHTML = ""

    todos = filteredTodo 
    renderTodos(filteredTodo)
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
