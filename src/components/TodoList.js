import React from 'react';
import { useTodoContext } from "../providers/TodoProvider";
import styles from './TodoList.module.css';

const TodoList = () => {
  const { todoList, removeTodo, handleEdit } = useTodoContext();
  const [editInput, setEditInput] = React.useState('');
  const [editTodoId, setEditTodoId] = React.useState(null);

  const handleEditSubmit = (e, todoId) => {
    e.preventDefault();
    handleEdit(todoId, editInput);
    setEditTodoId(null);
    setEditInput('');
  };

  const handleEditClick = (todoId, todoText) => {
    setEditTodoId(todoId);
    setEditInput(todoText);
  };

  return (
    <div className={styles.taskWrapper}>
      <ul className={styles.taskList}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles.taskListItem}>
            {editTodoId === todo.id ? (
              <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  className={styles.taskInput}
                />
                <button type="submit" className={styles.taskSave}>Save</button>
              </form>
            ) : (
              <>
                <span className={styles.taskText}> {todo.text}</span> 
                <button
                  onClick={() => handleEditClick(todo.id, todo.text)}
                  className={styles.taskButtonSmall}
                >
                  Edit
                </button>
              </>
            )}
            <button onClick={() => removeTodo(todo.id)}   className={styles.taskButtonSmall}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
