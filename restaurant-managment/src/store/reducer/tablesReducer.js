import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  tables: []
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

    default:
      return state;
  }
}
