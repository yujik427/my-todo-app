import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm.js';
import Todo from './components/Todo.js';
import { saveTodosToStorage, loadTodosFromStorage } from './utils/localStorage.js';

function App() {
  // localStorageから初期データを読み込む
  const [todos, setTodos] = useState(() => loadTodosFromStorage());

  // todosの状態が変更されるたびに自動保存
  useEffect(() => {
    saveTodosToStorage(todos);
  }, [todos]);

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
    <div className="app-container">
      <h1 className="app-title">Todoアプリ</h1>
      <TodoForm addTodo={addTodo} />

      {Object.keys(groupedTodos).sort().map(date => (
        <div key={date} className="date-section">
          <h2 className="date-title">{date}</h2>
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

export default App;【