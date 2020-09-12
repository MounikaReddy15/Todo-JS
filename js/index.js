

function createNode(ele) {
    return document.createElement(ele);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const listContainer = document.getElementById('list-container');

document.getElementById('add-btn').addEventListener('click', function() {
    
    const task = document.getElementById('task-bar').value
    // console.log(task);
    let todo = createNode('span')
    radio = createNode('input');
    
    radio.type = "radio";
    todo.innerHTML = task;
    append(listContainer,radio);
    append(listContainer, todo);
    append(listContainer, `<br>`)
})

