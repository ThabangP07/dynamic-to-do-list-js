document.addEventListener('DOMContentLoaded', function() {

    //access the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();

        if (!taskText) {
            alert('Enter a to-do item in the input field'); // alert the user
        } else {
            // create a new li element
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            
            // create a new button for the li element
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // add an event listener to remove the li element
            removeBtn.addEventListener('click', function() {
                taskList.remove('li');
            })

            taskInput.value = "";
        }
    }
});