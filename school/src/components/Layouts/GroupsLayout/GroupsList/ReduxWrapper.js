import { connect } from 'react-redux';
import GroupsList from './GroupsList';
import { addGroup, deleteGroup } from '../../../../store/actions';

const mapStateToProps = state => {
  return {
    groups: state.groups.groupsData
  };
};

const mapDispatchToProps = {
  addGroup,
  deleteGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
