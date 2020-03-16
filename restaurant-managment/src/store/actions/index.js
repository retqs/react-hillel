import * as types from './actionTypes';
import { api } from '../../services/api';

export const setLoading = () => ({
  type: types.SET_LOADING
});

export const fetchData = type => async dispatch => {
  const data = await api.get(type);

  dispatch(setLoading());

  dispatch({
    type: types.FETCH_DATA,
    payload: data.data
  });
};

// export const fetchTables = () => async dispatch => {
//   const data = await tableAPI.get('');

//   dispatch(setLoading());

//   dispatch({
//     type: types.FETCH_DATA_TABLES,
//     payload: data.data
//   });
// };

// export const fetchWaiters = () => async dispatch => {
//   const data = await waitersAPI.get('');

//   dispatch(setLoading());

//   dispatch({
//     type: types.FETCH_DATA_WAITERS,
//     payload: data.data
//   });
// };

export const addTable = () => {
  const newTable = {
    id: Math.random() * 33,
    name: 'Edit Name',
    description: 'Add Description',
    sits: 2
  };

  api.post('tables', newTable);

  return {
    type: types.ADD_TABLE,
    payload: newTable
  };
};

export const editTable = table => dispatch => {
  api.put(`tables/${table.id}`, table);

  dispatch({
    type: types.EDIT_TABLE,
    payload: table
  });
};

export const deleteTable = id => dispatch => {
  api.delete(`tables/${id}`);

  dispatch({
    type: types.DELETE_TABLE,
    payload: id
  });
};

export const addWaiter = () => {
  const newWaiter = {
    id: Math.random() * 33,
    name: 'New Name',
    salary: 0
  };

  api.post('waiters/', newWaiter);

  return {
    type: types.ADD_WAITER,
    payload: newWaiter
  };
};

export const editWaiter = waiter => dispatch => {
  api.put(`waiters/${waiter.id}`, waiter);

  dispatch({
    type: types.EDIT_WAITER,
    payload: waiter
  });
};

export const deleteWaiter = id => dispatch => {
  api.delete(`waiters/${id}`); //change it to the api.delete(`waiters/${id}`) that's it,you don't need make different axios instances

  dispatch({
    type: types.DELETE_WAITER,
    payload: id
  });
};

export const searchTable = table => ({
  type: types.SEARCH,
  payload: table
});

export const searchWaiter = waiter => ({
  type: types.SEARCH,
  payload: waiter
});
