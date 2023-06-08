import React, { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

const initialTodoListState = [
  { id: 1, text: "Learn" },
];

export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const getNumberOfTodoItems = () => todoList.length;

  const addTodo = (newTodoItem) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoItem,
    };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (todoId) => {
    const newList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newList);
  };

  const handleEdit = (todoId, newText) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const contextValue = {
    todoList,
    getNumberOfTodoItems,
    addTodo,
    removeTodo,
    handleEdit,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
