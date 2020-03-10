import * as types from './actionTypes';
import { tableAPI, waitersAPI, api } from '../../services/api';

export const setLoading = () => ({
  type: types.SET_LOADING
});

export const fetchData = resource => async dispatch => {
  const data = await api.get(resource);

  dispatch(setLoading());

  dispatch({
    type: types.FETCH_DATA,
    payload: data.data
  });
};

export const addTable = table => dispatch => {
  tableAPI.post('', table);

  dispatch({
    type: types.ADD_TABLE,
    payload: table
  });
};

export const editTable = table => dispatch => {
  api.put(table.id, table);

  dispatch({
    type: types.EDIT_TABLE,
    payload: table
  });
};

export const deleteTable = id => dispatch => {
  tableAPI.delete(id);

  dispatch({
    type: types.DELETE_TABLE,
    payload: id
  });
};

export const addWaiter = () => ({
  type: types.ADD_WAITER
});

export const editWaiter = waiter => ({
  type: types.EDIT_WAITER,
  payload: waiter
});

export const deleteWaiter = id => ({
  type: types.DELETE_WAITER,
  payload: id
});
