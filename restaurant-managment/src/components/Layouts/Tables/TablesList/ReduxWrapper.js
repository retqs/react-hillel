import { connect } from 'react-redux';
import List from './TablesList';
import { deleteTable, addTable, fetchData } from '../../../../store/actions';

const mapStateToProps = state => {
  return {
    tables: state.tables.tables,
    isLoading: state.tables.isLoading
  };
};

const mapDispatchToProps = {
  deleteTable,
  addTable,
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
