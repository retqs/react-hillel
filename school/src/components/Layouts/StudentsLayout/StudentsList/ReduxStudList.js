import { connect } from 'react-redux';
import StudentsList from './StudentsList';
import { addStudent, searchStudent } from '../../../../store/actions';

const mapStateToProps = state => {
  return {
    students: state.students.students.filter(prevState => prevState.name.includes(state.students.search)),
    search: state.students.search
  };
};

const mapDispatchToProps = {
  addStudent,
  searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
