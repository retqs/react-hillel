import { connect } from 'react-redux';

import { addTodo, deleteTodo, editTodo, toggleModal, newTodo } from '../../store/actions';
import TodoList from './TodoList';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  editTodo,
  toggleModal,
  newTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
