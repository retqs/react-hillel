import * as types from './actionTypes';

export const addTodo = () => ({
  type: types.ADD_TODO
});

export const editTodo = todo => ({
  type: types.EDIT_TODO,
  todo
});

export const deleteTodo = id => ({
  type: types.REMOVE_TODO,
  id
});

export const toggleModal = () => ({
  type: types.TOGGLE_MODAL
});

export const newTodo = () => ({
  type: types.NEW_TODO
});
