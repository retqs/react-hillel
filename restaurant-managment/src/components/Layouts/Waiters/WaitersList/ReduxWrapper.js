import { connect } from 'react-redux';
import List from './WaitersList';
import { deleteWaiter, fetchData, addWaiter, editWaiter } from '../../../../store/actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    waiters: state.waiters.waiters,
    isLoading: state.waiters.isLoading
  };
};

const mapDispatchToProps = {
  deleteWaiter,
  fetchData,
  addWaiter,
  editWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
