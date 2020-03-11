import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  waiters: [],
  search: ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_WAITER:
      return {
        ...state,
        waiters: [...state.waiters, { ...payload, startDate: Date.now() }]
      };
    case types.DELETE_WAITER:
      return {
        ...state,
        waiters: state.waiters.filter(item => item.id !== payload)
      };
    case types.FETCH_DATA_WAITERS:
      return {
        ...state,
        isLoading: false,
        waiters: payload
      };
    case types.EDIT_WAITER:
      return {
        ...state,
        waiters: state.waiters.map(item => (item.id === payload.id ? payload : item))
      };
    case types.SEARCH:
      return {
        ...state,
        search: payload
      };
    default:
      return state;
  }
}
