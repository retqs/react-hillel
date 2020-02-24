import React from 'react';
import TodoItem from '../Todo/Todo';

import './TodoList.css';

const TodoList = ({ todos, deleteTodo, editTodo, toggleModal, newTodo }) => {
  const handleNewTodo = () => {
    toggleModal();
    newTodo();
  };

  return (
    <div className='container'>
      <button className='newTodoBtn' onClick={() => handleNewTodo()}>
        Add new todo
      </button>
      <ul className='todoList'>
        {todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleModal={toggleModal}
            ></TodoItem>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
