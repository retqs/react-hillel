import { connect } from 'react-redux';

import { toggleModal, addTodo, editTodo } from '../../store/actions';
import Modal from './Modal';

const mapStateToProps = state => ({
  isModalOpen: state.isModalOpen,
  isNewTodo: state.isNewTodo,
  newTodo: state.newTodo
});

const mapDispatchToProps = {
  toggleModal,
  addTodo,
  editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
