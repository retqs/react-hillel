import { connect } from 'react-redux';
import StudentsList from './StudentsList';
import { addStudent, searchStudent } from '../../../../store/actions';

const mapStateToProps = state => {
  const regexQuery = new RegExp(state.students.search, 'gi');

  console.log(state.groups.groupsData);

  return {
    students: state.students.search
      ? state.students.students.filter(prevState => prevState.name.match(regexQuery))
      : state.students.students,
    search: state.students.search
  };
};

const mapDispatchToProps = {
  addStudent,
  searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
