import React from 'react';

import './todo.css';

const Todo = ({ todo, deleteTodo, editTodo, toggleModal }) => {
  const toggleIsDone = value => {
    editTodo({ ...value, isDone: !todo.isDone });
  };

  const handleEdit = () => {
    toggleModal();
    editTodo(todo);
  };

  return (
    <li className='listItem'>
      <article className={`listItem__text ${todo.isDone ? 'done' : ''}`}>
        <p>{todo.text}</p>
      </article>
      <div className='buttons'>
        <div className={`buttons__isDone ${todo.isDone ? 'done' : ''}`} onClick={() => toggleIsDone(todo)}>
          <span>&#10003;</span>
        </div>
        <div className='buttons__edit' onClick={() => handleEdit()}>
          <span>&#9998;</span>
        </div>
        <div className='buttons__delete' onClick={() => deleteTodo(todo.id)}>
          <span>&times;</span>
        </div>
      </div>
    </li>
  );
};

export default Todo;
