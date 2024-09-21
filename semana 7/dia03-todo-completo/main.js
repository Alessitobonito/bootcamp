const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = [
  /*{
    title: 'Estudiar Javascript',
    completed: true
  },
  {
    title: 'Salir al receso a las 9:00pm',
    completed: false
  },
  {
    title: 'Realizar el reto del fin de semana',
    completed: false
  }*/
]
if( tasks==[""])
taskInput.addEventListener('keydown', function(event) {
  // console.log(event.key)

  const value = event.target.value

  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea', value)

    const newTask = {
      title: value,
      completed: false
    }

    tasks.push(newTask)

    console.log(tasks)

    // event.target.value = ''
    taskInput.value = ''

    renderTasks()
  }
})

function renderTasks() {
  let lista = ''

  tasks.forEach(function(task) {
    lista = lista + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input
          type="checkbox"
        />
        <div class="w-full">${task.title}</div>
        <button
          class="border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300"
        >
          Borrar
        </button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

renderTasks()