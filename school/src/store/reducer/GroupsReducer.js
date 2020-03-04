import { data } from '../../data';
import * as types from '../../store/actions/actionTypes';

const newGroup = {
  name: 'Edit',
  students: []
};

const intialState = {
  groupsData: data
};

export default function(state = intialState, { type, payload }) {
  switch (type) {
    case types.EDIT_GROUP:
      return {
        ...state,
        groupsData: state.groupsData.map(item => (item.id === payload.id ? payload : item))
      };

    case types.ADD_GROUP:
      return {
        ...state,
        groupsData: [...state.groupsData, { id: Date.now(), ...newGroup }]
      };

    case types.DELETE_GROUP:
      return {
        ...state,
        groupsData: state.groupsData.filter(item => item.id !== payload.id)
      };
    default:
      return state;
  }
}
