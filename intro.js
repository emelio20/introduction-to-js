const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const clearAllButton = document.getElementById('clear-all');


addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAll);
newTaskInput.addEventListener('keypress', handleKeyPress);


function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const taskListItem = createTaskListItem(newTask);
    taskList.appendChild(taskListItem);
    newTaskInput.value = '';
  }
}


function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}


function createTaskListItem(taskText) {
  const taskListItem = document.createElement('li');
  taskListItem.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', deleteTask);
  taskListItem.appendChild(deleteButton);
  taskListItem.addEventListener('click', toggleCompleted);
  return taskListItem;
}

 
function deleteTask(event) {
  const taskListItem = event.target.parentNode;
  taskList.removeChild(taskListItem);
}


function toggleCompleted(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
}


function clearAll() {
  taskList.innerHTML = '';
}