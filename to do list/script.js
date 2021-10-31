const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filter-todos");

// listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkRemove);
filterOption.addEventListener('click', filterTodos);

//functions

function addTodo(e){
    // console.log(e);
    e.preventDefault();
    //get to do value
    //create new todo
    //add to dom
    //reset input
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = `
    <li>${todoInput.value} </li>
    <span><i class="far fa-trash-alt"></i></span>
    <span><i class="far fa-check-square"></i></span>`
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
function checkRemove(e){
    const classList = [...e.target.classList];
    const item = e.target;
    // console.log(item.parentElement.parentElement);
    // console.log(classList);
    if(classList[1] === 'fa-trash-alt'){
        item.parentElement.parentElement.remove();
    } else if(classList[1] === 'fa-check-square'){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle('completed');
    }
}
function filterTodos(e){
// console.log(e.target.value);
    const todos = [...todoList.childNodes]
// console.log(todo);
    todos.forEach((todo) =>{
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "unCompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}