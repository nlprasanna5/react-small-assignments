import React from 'react';
import { useTodoContext } from "../providers/TodoProvider";
import styles from './TodoForm.module.css';

const TodoForm = () => {
  const { getNumberOfTodoItems, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = React.useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(todoItem);
    setTodoItem("");
  };

  return (
    <form className={styles.taskForm} onSubmit={handleOnSubmit}>
        <div className={styles.upper}>
      <h3 className={styles.todoCount}>Number of todo items: {getNumberOfTodoItems()} </h3>
      </div>
      <div className={styles.lower}>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        className={styles.taskInput}
      />
      <button type="submit" className={styles.taskButton}>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
