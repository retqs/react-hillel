import React from 'react';
import './todo.css';

const Todo = ({ item, handleDelete, editUser, handleUpdateTodo }) => {
  const { title, isDone } = item;

  const toggleIsDone = todo => {
    handleUpdateTodo({ ...todo, isDone: !isDone });
  };

  return (
    <li className='todo'>
      <article className={`todo__info ${isDone ? 'done' : ''}`}>
        <h4>{title}</h4>
      </article>
      <div className='todo__icons'>
        <span className={`todo__icons--isDone ${isDone ? 'done' : ''}`} onClick={() => toggleIsDone(item)}>
          &#10003;
        </span>
        <span className='todo__icons--edit' onClick={() => editUser(item.id)}>
          &#9998;
        </span>
        <span className='todo__icons--delete' onClick={() => handleDelete(item.id)}>
          &times;
        </span>
      </div>
    </li>
  );
};

export default Todo;
