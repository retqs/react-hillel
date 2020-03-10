import { data } from '../../data';
import * as types from '../actions/actionTypes';

const initialState = {
  groups: data,
  students: getAllStudents(data),
  search: ''
};

function getAllStudents(arr) {
  const students = [];
  arr.map(group =>
    group.students.map(student => {
      return students.push(student);
    })
  );

  return students;
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map(item => (item.id === payload.id ? payload : item))
      };
    case types.ADD_STUDENT:
      return {
        ...state,
        groups: state.groups.map(val =>
          val.name === payload.group ? { ...val, students: [...val.students, payload] } : val
        ),
        students: getAllStudents(state.groups)
      };
    case types.SEARCH_STUDENT:
      return {
        ...state,
        search: payload
      };
    case types.DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(item => item.id !== payload.id)
      };

    default:
      return state;
  }
}
