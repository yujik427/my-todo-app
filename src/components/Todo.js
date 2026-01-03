import React from 'react';

function Todo({ todos, date, toggleTodo, deleteTodo }) {
  return todos.map((todo, index) => (
    <div key={todo.id || index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(date, index)}
      />
      <span className="todo-text">
        {todo.text}
      </span>
      <button className="todo-delete-btn" onClick={() => deleteTodo(date, index)}>削除</button>
    </div>
  ));
}

export default Todo;
