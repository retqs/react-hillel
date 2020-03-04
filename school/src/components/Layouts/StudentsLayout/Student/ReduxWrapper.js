import { connect } from 'react-redux';
import Student from './Student';
import { deleteStudent, editStudent } from '../../../../store/actions';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  deleteStudent,
  editStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
