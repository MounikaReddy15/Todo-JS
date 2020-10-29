

const addButton  = document.getElementById('add-btn');
const todo = document.getElementById('task-bar');
const listDisplay = document.getElementById('list-container');
const localContent = localStorage.getItem('task');
var results = JSON.parse(localContent);

let task = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : []

const storeTasks = (todos) => {
    if(todos) {
    location.reload();
    task.push(todos);
    
    localStorage.setItem("task", JSON.stringify(task));
    
    
}
}
const removeTask = (text) => {
  console.log(text);
  const index = results.indexOf(text);
  console.log(index);
  results.splice(index,1);
  console.log(results);
  localStorage.setItem('task', JSON.stringify(results));
  window.location.reload();
}

var id=0;
const liMaker = (text) => {
   
    const li = document.createElement('li');
    li.innerHTML = `<input class= "radioBtn" onclick = "check(id)" job="complete" type="checkbox" id= '${id}' >  &nbsp;&nbsp;`;
    
    li.innerHTML += text;
   
    li.innerHTML += `
     
    <span> <button id= "delete-btn"onclick = "removeTask('${text}')"> Delete </button> </span>`
    listDisplay.appendChild(li)
    id++;
}

 const displayTasks = () => {
    
 results.forEach((item) => {
    
  liMaker(item)
  
 });
 }

const check = (id) => {
  if(task[id].includes(`<strike>`)) {
    task[id] = task[id].replace("<strike>", "");
    task[id] = task[id].replace("</strike>", "");
  }
  else {
    task[id]= `<strike>  ${task[id]}  </strike>`;
  }
  
    localStorage.setItem("task", JSON.stringify(task));
  
}

addButton.addEventListener('click', () => storeTasks(todo.value));
displayTasks();

