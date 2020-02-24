import * as types from '../actions/actionTypes';

const initialState = {
  newTodo: {
    id: Date.now(),
    text: '',
    isDone: false
  },
  todos: [
    {
      id: Math.random() * 100,
      text: 'new text',
      isDone: false
    },
    {
      id: Math.random() * 100,
      text: 'not a new text',
      isDone: true
    },
    {
      id: Math.random() * 100,
      text: 'middleware',
      isDone: false
    },
    {
      id: Math.random() * 100,
      text: 'yield',
      isDone: true
    }
  ],
  isModalOpen: false,
  isNewTodo: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.NEW_TODO:
      return {
        ...state,
        newTodo: {
          id: Date.now(),
          text: '',
          isDone: false
        },
        isNewTodo: true
      };

    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...state.newTodo }],
        isNewTodo: false
      };

    case types.EDIT_TODO:
      return {
        ...state,
        newTodo: action.todo,
        todos: state.todos.map(todo => {
          return todo.id === action.todo.id ? action.todo : todo;
        })
      };

    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todos => todos.id !== action.id)
      };

    case types.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };

    default:
      return state;
  }
}
