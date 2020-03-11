import { connect } from 'react-redux';
import List from './WaitersList';
import { deleteWaiter, fetchWaiters, addWaiter, editWaiter, searchWaiter } from '../../../../store/actions';
import { createSelector } from 'reselect';

const waitersSelector = state => state.waiters.waiters;
const searchSelector = state => state.waiters.search;

const getFilteredWaiters = createSelector([waitersSelector, searchSelector], (waiters, search) => {
  const filteredSearch = new RegExp(search, 'gi');

  return {
    waiters: search ? waiters.filter(prevState => prevState.name.match(filteredSearch)) : waiters
  };
});

const mapStateToProps = state => {
  return {
    waiters: getFilteredWaiters(state).waiters,
    isLoading: state.waiters.isLoading
  };
};

const mapDispatchToProps = {
  deleteWaiter,
  fetchWaiters,
  addWaiter,
  editWaiter,
  searchWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
