import { combineReducers } from 'redux';
import waiters from './watiers/watiersReducer';
import tables from './tables/tablesReducer';

export default combineReducers({
  waiters,
  tables
});
