import { connect } from 'react-redux';
import AddStudent from './AddStudent';
import { addStudent } from '../../../../store/actions';

const mapStateToProps = state => {
  return {
    groups: state.groups.groupsData
  };
};

const mapDispatchToProps = {
  addStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
