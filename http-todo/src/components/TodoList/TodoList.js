import React from 'react';
import Todo from '../Todo/Todo';
import './list.css';

const List = ({ data, handleDelete, editUser, handleUpdateTodo }) => {
  return (
    <ul>
      {data.map(item => (
        <Todo
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          editUser={editUser}
          handleUpdateTodo={handleUpdateTodo}
        ></Todo>
      ))}
    </ul>
  );
};

export default List;
