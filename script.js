document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();

        if (!taskText) {
            alert('Enter a to-do item in the input field');
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            removeBtn.addEventListener('click', function() {
                taskList.remove('li');
            })

            taskInput.value = "";
        }
    }

    
});