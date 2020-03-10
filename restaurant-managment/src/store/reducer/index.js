import { combineReducers } from 'redux';
import waiters from './watiersReducer';
import tables from './tablesReducer';

export default combineReducers({
  waiters,
  tables
});
