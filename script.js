document.addEventListener('DOMContentLoaded', function() {

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

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
            removeBtn.classList.add('remove-btn');

            // add an event listener to remove the li element
            removeBtn.addEventListener('click', function() {
                taskList.remove('li');
            })

            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);

            taskInput.value = "";
        }
    }

    // 1. Add click listener to "Add" button
    addButton.addEventListener('click', addTask);

    // 2. Add Enter key support to input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // 3. Run addTask once when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        addTask(); 
    });
});