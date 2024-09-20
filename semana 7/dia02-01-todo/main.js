const taskInput = document.querySelector('.task__input');
const taskAdd = document.querySelector('.task__button');
const taskList = document.querySelector('.task__list');

taskAdd.addEventListener('click', function(event) {
    if (taskInput.value.trim() === '') {
        window.alert("ingresa una tarea");
        return;
    }

    const li = document.createElement('li');
    li.style.listStyleType = 'none'; 
    li.style.display = 'flex'; 
    li.style.alignItems = 'center'; 

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.style.marginRight = '10px'; 

    let textSpan = document.createElement('span');
    textSpan.textContent = taskInput.value;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.style.marginLeft = '10px';

    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            textSpan.classList.add('checked');
        } else {
            textSpan.classList.remove('checked');
        }
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = ''; 
});
