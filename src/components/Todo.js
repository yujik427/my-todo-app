import React from 'react';

function Todo({ todos, date, toggleTodo, deleteTodo }) {
  return todos.map((todo, index) => (
    <div key={index}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(date, index)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(date, index)}>削除</button>
    </div>
  ));
}

export default Todo;
