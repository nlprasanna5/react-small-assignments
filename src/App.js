import React, { useState, useReducer } from 'react';
import styles from './App.module.css';

const initialState = {
  todos: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':{
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }

      case 'UPDATE':{
        const { id, title } = action.payload;
        const todoIndex = state.todos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
          const updatedTodos = [...state.todos];
          updatedTodos[todoIndex].title = title;
          return {
            ...state,
            todos: updatedTodos,
          };
        }
        return state;
      }

      case 'DELETE' : {
        const { id, } = action.payload;
        const deletedValues = state.todos.filter((item,index) => {
            return item.id !== id
        })
        return {
          ...state,
          todos: deletedValues,
        }
      }

      default:{
        return state;
      }
        
       
          
  }

}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addInput, setAddInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  function handleAddSubmit(e) {
    e.preventDefault();
    const todo = {
      id: Date.now().toString(),
      title: addInput
    }
    dispatch(
      {
        type: 'ADD_TODO',
        payload: todo
      }
    )
    setAddInput("")
  }

  function handleEdit(id,title){
    setEditTodoId(id);
    setEditInput(title)

  }

  function handleEditSubmit(e){
       e.preventDefault();
       let editValues={
         id:editTodoId,
         title: editInput
       }
       dispatch(
        {
          type:'UPDATE',
          payload: editValues,
        }
       )

       setEditTodoId(null);
       setEditInput('')
  }

  function handleDelete(id){
    let deleteValue={
      id:id,
    }
    dispatch(
      {
        type:'DELETE',
        payload: deleteValue,
      }
    )
  }

  return (
    <div className={styles.taskWrapper}>
      <h1 className={styles.taskHeader}>Todo App</h1>
      <form onSubmit={handleAddSubmit} className={styles.taskForm}>
        <input
          type='text'
          placeholder='Enter todo'
          value={addInput}
          onChange={(e) => setAddInput(e.target.value)}
          className={styles.taskInput}
        />
        <button type='submit' className={styles.taskButton} >Add</button>
      </form>
      <ul className={styles.taskList}>
        {
          state.todos.map((item, index) => (
            <li key={item.id} className={styles.taskListItem}>
              {
                editTodoId === item.id ? (
                  <form onSubmit={handleEditSubmit}>
                    <input
                      type='text'
                      value={editInput}
                      onChange={(e) => setEditInput(e.target.value)}
                      className={styles.taskInput}
                    />
                    <button type='submit' className={styles.taskSave}>Save</button>
                  </form>
                ) : (
                  <>
                  <span className={styles.taskText}> {item.title}</span> 
                    <button 
                    onClick={() => handleEdit(item.id, item.title)}
                    className={styles.taskButtonSmall}
                    >Edit</button>
                  </>
                )

              }
              <button 
              onClick={()=> handleDelete(item.id)}
              className={styles.taskButtonSmall}
              >Delete</button>
            
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;