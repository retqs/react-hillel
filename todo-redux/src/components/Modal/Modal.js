import React from 'react';

import './Modal.css';

const Modal = ({ isModalOpen, toggleModal, addTodo, newTodo, isNewTodo, editTodo }) => {
  console.log(isNewTodo);
  const onSubmit = e => {
    e.preventDefault();
    console.log(isNewTodo);
    toggleModal();
    isNewTodo ? addTodo() : editTodo(newTodo);
  };

  const onChange = e => {
    const target = e.target;
    editTodo({ ...newTodo, text: target.value });
  };

  return (
    <div className={`modal ${isModalOpen ? 'collapse' : ''}`}>
      <div className='modal__overlay'></div>
      <form className='form' onSubmit={onSubmit}>
        <span className='modal__closeBtn' onClick={() => toggleModal()}>
          &times;
        </span>
        <input type='text' value={newTodo.text} onChange={e => onChange(e)} autoComplete='off' />
        <button type='submit' className='form__submit'>
          Ok
        </button>
      </form>
    </div>
  );
};

export default Modal;
