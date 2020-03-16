import * as types from '../../actions/actionTypes';

const initialState = {
  isLoading: true,
  tables: [],
  search: ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        tables: payload
      };
    case types.ADD_TABLE:
      return {
        ...state,
        tables: [...state.tables, payload]
      };
    case types.DELETE_TABLE:
      return {
        ...state,
        tables: state.tables.filter(item => item.id !== payload)
      };
    case types.EDIT_TABLE:
      return {
        ...state,
        tables: state.tables.map(item => (item.id === payload.id ? payload : item))
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
