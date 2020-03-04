import * as types from './actionTypes';

export const editStudent = student => ({
  type: types.EDIT_STUDENT,
  payload: student
});

export const addStudent = student => ({
  type: types.ADD_STUDENT,
  payload: student
});

export const searchStudent = query => ({
  type: types.SEARCH_STUDENT,
  payload: query
});

export const deleteStudent = student => {
  return {
    type: types.DELETE_STUDENT,
    payload: student
  };
};

export const editGroup = item => ({
  type: types.EDIT_GROUP,
  payload: item
});

export const addGroup = () => ({
  type: types.ADD_GROUP
});

export const deleteGroup = group => ({
  type: types.DELETE_GROUP,
  payload: group
});
