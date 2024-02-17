import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Input = () => {
  const [todos, setTodos] = useState([
    {
      label: "Hacer la cama",
      isDone: false
    }
  ]);
  const [item, setItem] = useState("");


// Esta función maneja la eliminación de una tarea específica
const handleDelete = (index) => {
  // Crea una copia del array de tareas
  const updatedTodos = [...todos];
  // Elimina la tarea en la posición 'index' del array copiado
  updatedTodos.splice(index, 1);
  // Actualiza el estado de las tareas con el nuevo array sin la tarea eliminada
  setTodos(updatedTodos);
};

// Esta función maneja el cambio en el input para agregar una nueva tarea
const handleChange = (event) => {
  // Actualiza el estado 'item' con el valor del input
  setItem(event.target.value);
};

// Esta función maneja la presión de la tecla Enter para agregar una nueva tarea
const handleKeyPress = (event) => {
  // Verifica si la tecla presionada es 'Enter' y si el input no está vacío
  if (event.key === "Enter" && item.trim() !== "") {
    // Agrega una nueva tarea al array de tareas con el contenido del input
    setTodos([...todos, { label: item, isDone: false }]);
    // Limpia el input
    setItem("");
  }
};


  return (
    <>
      <form
        className="container d-flex flex-column align-items-center"
        action="#"
      >
        <h1>To-Do List</h1>
        {/* Input para ingresar una nueva tarea */}
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Add Task ..."
          aria-label="todo-list input field"
          value={item}
          onChange={handleChange} // Llama a la función handleChange cuando cambia el input
          onKeyDown={handleKeyPress} // Llama a la función handleKeyPress cuando se presiona una tecla
        />
      </form>
      {/* Renderiza las tareas existentes */}
      {todos.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {/* Mapea las tareas y pasa la función handleDelete a cada TodoItem */}
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              label={todo.label}
              isDone={todo.isDone}
              deleteTodo={() => handleDelete(index)} // Llama a handleDelete cuando se hace clic en el botón de eliminar
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Input;
