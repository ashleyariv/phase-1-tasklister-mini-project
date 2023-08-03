document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form');
  
  newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = event.target['new-task-description'].value;
    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = ' X';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    })
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    event.target.reset();
  })
});