

const addButton  = document.getElementById('add-btn');
const todo = document.getElementById('task-bar');
const listDisplay = document.getElementById('list-container');
const total = document.getElementById('total');
const localContent = localStorage.getItem('task');
var results = JSON.parse(localContent);


 // local storage
let task = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : []


 // to store todo's
const storeTasks = (todos) => {
  if(todos) {
    location.reload();
    task.push(todos);
    localStorage.setItem("task", JSON.stringify(task));
  }
}

// to delete task
const removeTask = (text) => {
  console.log(text);
  const index = results.indexOf(text);
  console.log(index);
  results.splice(index,1);
  console.log(results);
  localStorage.setItem('task', JSON.stringify(results));
  window.location.reload();
}


// listing of tasks
var id=0;
const liMaker = (text) => {
    const li = document.createElement('li');
    li.innerHTML = `<input class= "radioBtn" onclick = "check(id)" job="complete" type="checkbox" id= '${id}' >  &nbsp;&nbsp;`;
    li.innerHTML += `<span id="task-list"> ${text} </span>`
    li.innerHTML += `
    <span> <button id= "delete-btn"onclick = "removeTask('${text}')"> Delete </button> </span>`
    listDisplay.appendChild(li)
    id++;
    total.innerHTML = id +" tasks";
}


// to display tasks
const displayTasks = () => {
  results.forEach((item) => {
  liMaker(item)
  
});
}

// check-off todo
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

