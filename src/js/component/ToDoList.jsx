import React, { useState } from 'react';

function ToDoList() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);
  // Estado para almacenar la nueva tarea ingresada por el usuario
  const [newTask, setNewTask] = useState('');
  // Estado para controlar el índice del elemento sobre el cual se muestra el botón de eliminar
  const [showDelete, setShowDelete] = useState(null);

  // Manejador de cambio para actualizar el estado 'newTask' con el valor del input
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Manejador de tecla para detectar la tecla 'Enter' y llamar a handleSubmit
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  // Manejador de envío del formulario para agregar una nueva tarea a la lista
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      // Agrega la nueva tarea al array 'tasks' y limpia el input
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Manejador de eliminación de una tarea específica
  const handleDelete = (index) => {
    // Filtra las tareas para eliminar la tarea en la posición 'index'
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      {/* Formulario para agregar nuevas tareas */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange} onKeyDown={handleKeyDown} />
        <button type="submit">Add Task</button>
      </form>
      {/* Renderiza la lista de tareas */}
      {tasks.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} onMouseEnter={() => setShowDelete(index)} onMouseLeave={() => setShowDelete(null)}>
              {/* Muestra la tarea */}
              {task}
              {/* Muestra el botón de eliminar cuando se pasa el ratón sobre el elemento */}
              {showDelete === index && (
                <button onClick={() => handleDelete(index)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
