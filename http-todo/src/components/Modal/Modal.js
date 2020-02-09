import React from 'react';
import './modal.css';

const Form = ({ handleSave, toggleModal, isModalOpen, handleChange, newTodo }) => {
  function onChange(e) {
    const target = e.target;

    handleChange({
      [target.name]: target.value
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSave(newTodo);
  }

  return (
    <div className={`modal ${isModalOpen ? 'reveal' : ''}`}>
      <div className='modal__cover' onClick={() => toggleModal()}></div>
      <form className='form' onSubmit={onSubmit}>
        <button className='modal__closeBtn' type='button' onClick={() => toggleModal()}>
          &times;
        </button>
        <input name='title' value={newTodo.title} onChange={onChange} type='text' autoComplete='off' />
        <button className='form__submitBtn' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
