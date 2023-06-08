import React from 'react';
import TodoProvider from './providers/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Todo List</h1>
      </header>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
