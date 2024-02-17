import React from "react";

const TodoItem = ({ label, isDone, deleteTodo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} onChange={() => {}} />
      <span className="todo-text">{label}</span>
      {/* Agregamos un botón de eliminar que llamará a la función deleteTodo */}
      <button
        className="fst-italic text-danger border-0 bg-white fs-5"
        onClick={deleteTodo}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
