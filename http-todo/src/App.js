import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import api from './services/api';

const initialTodo = {
  id: Math.random() * 100,
  title: '',
  isDone: false
};

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState(initialTodo);
  const [isNewTodo, setIsNewTodo] = useState(false);

  useEffect(() => {
    api.get('').then(res => setData(res.data));
  }, []);

  const handleDelete = id => {
    api.delete(id).then(res => res.data);

    setData(data.filter(item => item.id !== id));
  };

  const toggleModal = () => {
    setNewTodo({ ...newTodo, title: '' });
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = changes => {
    setNewTodo({
      ...newTodo,
      ...changes
    });
  };

  const editUser = id => {
    setNewTodo(data.find(item => item.id === id));
    setIsModalOpen(true);
    setIsNewTodo(false);
  };

  const handleSave = todo => {
    toggleModal();

    if (isNewTodo) {
      handleCreateTodo(todo);
    } else {
      handleUpdateTodo(todo);
    }
  };

  const handleUpdateTodo = todo => {
    api.put(todo.id, todo).then(res => {
      setData(
        data.map(value => {
          return value.id === res.data.id ? res.data : value;
        })
      );
    });
  };

  const handleCreateTodo = todo => {
    api.post('', todo).then(res => {
      setData([...data, res.data]);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button
          className='newTodo'
          onClick={() => {
            setIsNewTodo(true);
            toggleModal();
          }}
        >
          Add
        </button>
        <Modal
          handleSave={handleSave}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          handleChange={handleChange}
          newTodo={newTodo}
        ></Modal>
        <TodoList
          data={data}
          handleDelete={handleDelete}
          editUser={editUser}
          handleUpdateTodo={handleUpdateTodo}
        ></TodoList>
      </header>
    </div>
  );
}

export default App;
