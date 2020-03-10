import * as types from '../actions/actionTypes';

const newWaiter = {
  id: Math.random() * 33,
  name: 'Give me a name',
  salary: 'Also I need salary',
  startDate: Date.now()
};

const initialState = {
  isLoading: true,
  waiters: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_WAITER:
      return {
        ...state,
        waiters: [...state.waiters, newWaiter]
      };
    case types.DELETE_WAITER:
      return {
        ...state,
        waiters: state.waiters.filter(item => item.id !== payload)
      };
    case types.FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        waiters: payload
      };
    default:
      return state;
  }
}
