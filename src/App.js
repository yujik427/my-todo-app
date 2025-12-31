import React, { useState } from 'react';
import TodoForm from './components/TodoForm.js';
import Todo from './components/Todo.js';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, date) => {
    const newTodos = [...todos, { text, date, completed: false, id: Date.now() }];
    setTodos(newTodos);
  };

  const toggleTodo = (date, index) => {
    const newTodos = [...todos];
    const dateTodos = newTodos.filter(todo => todo.date === date);
    if (dateTodos[index]) {
      dateTodos[index].completed = !dateTodos[index].completed;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (date, index) => {
    const dateTodos = todos.filter(todo => todo.date === date);
    const todoToDelete = dateTodos[index];
    if (todoToDelete) {
      const newTodos = todos.filter(todo => todo.id !== todoToDelete.id);
      setTodos(newTodos);
    }
  };

  // 日付ごとにTodoをグループ化
  const groupedTodos = todos.reduce((groups, todo) => {
    const date = todo.date || '未設定';
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(todo);
    return groups;
  }, {});

  return (
    <div>
      <h1>React ToDo管理アプリ</h1>
      <TodoForm addTodo={addTodo} />
      {Object.keys(groupedTodos).sort().map(date => (
        <div key={date}>
          <h2>{date}</h2>
          <Todo
            todos={groupedTodos[date]}
            date={date}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default App;