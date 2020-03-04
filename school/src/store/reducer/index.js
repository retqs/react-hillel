import { combineReducers } from 'redux';
import groups from './GroupsReducer';
import students from './StudentsReducer';

export default combineReducers({
  groups,
  students
});
