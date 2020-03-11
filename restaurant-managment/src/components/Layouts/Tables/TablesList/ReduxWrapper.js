import { connect } from 'react-redux';
import List from './TablesList';
import { deleteTable, addTable, fetchTables, searchTable } from '../../../../store/actions';
import { createSelector } from 'reselect';

const tableSelectror = state => state.tables.tables;
const searchSelector = state => state.tables.search;

const getFilteredTables = createSelector([tableSelectror, searchSelector], (tables, search) => {
  const Regexed = new RegExp(search, 'gi');

  return {
    tables: search ? tables.filter(prevState => prevState.name.match(Regexed)) : tables
  };
});

const mapStateToProps = state => {
  console.log(getFilteredTables(state).tables);
  return {
    tables: getFilteredTables(state).tables,
    isLoading: state.tables.isLoading
  };
};

const mapDispatchToProps = {
  deleteTable,
  addTable,
  fetchTables,
  searchTable
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
