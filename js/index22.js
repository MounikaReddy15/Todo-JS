

function createNode(ele) {
    return document.createElement(ele);
}

function append(parent, el) {
   
     parent.appendChild(el);
     
     return
}

const listContainer = document.getElementById('list-container');
let task = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : []

document.getElementById('add-btn').addEventListener('click', function() {
    
    const todo = document.getElementById('task-bar').value
    // console.log(task);
    // let todo = createNode('span')
    // radio = createNode('input');
    
    // radio.type = "radio";
    // todo.innerHTML = task;
    // append(listContainer,radio);
    // append(listContainer, todo);

    // append(listContainer, '<br>')

    task.push(todo);
    console.log(task);
    localStorage.setItem("task", JSON.stringify(task));
    const localContent = localStorage.getItem('task');
    var results = JSON.parse(localContent);
    results.forEach((item) => {
    var html = [ `
         
       <div>
       <input type="checkbox">
        <span> ${item} </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button> Delete </button>
        </div>
        <br>
        `
    
    ].join('');
    
        listContainer.innerHTML += html;
    
  
  })      // console.log(JSON.parse(localstorage));
})

