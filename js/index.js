

const addButton  = document.getElementById('add-btn');
const todo = document.getElementById('task-bar');
const listDisplay = document.getElementById('list-container');

let task = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : []

const storeTasks = (todos) => {
    
    location.reload();
    task.push(todos);
    // console.log(task);
    localStorage.setItem("task", JSON.stringify(task));
    
    // displayTasks();
}

const localContent = localStorage.getItem('task');
var results = JSON.parse(localContent);

const liMaker = (text) => {
   
    const li = document.createElement('li');
    li.innerHTML = `<input type="radio" >  &nbsp;&nbsp;`;
    li.innerHTML += text;
    // console.log(results.indexOf(text));
   
    li.innerHTML += `
     
    <span> <button onclick = "removeTask('${text}')"> Delete </button> </span>`
    listDisplay.appendChild(li)
    
}

 const displayTasks = () => {
    
 results.forEach((item) => {
    
  liMaker(item)
  
 });
 }





addButton.addEventListener('click', () => storeTasks(todo.value));
displayTasks();