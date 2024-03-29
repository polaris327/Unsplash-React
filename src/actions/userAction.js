import axios from 'axios';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_ERRORS,
  CLEAR_USERS,
  SELECT_USER,
  SELECT_USER_SUCCESS
} from './types';
import { API_ROOT, ACCESS_KEY } from '../constants/service-info';

export const onGetUsers = (options) => dispatch => {
  dispatch({
    type: GET_USERS
  });
  const { query, page, per_page, url } = options;
  const clientId = `client_id=${ACCESS_KEY}`
  const usersQuery = clientId + `&query=${query ? query : ''}` 
              + `&page=${page ? page : 1}`
              + `&per_page=${per_page ? per_page : 10}`;

  axios.get(`${API_ROOT}/${url}?${usersQuery}`)
    .then(res => {
      const { results } = res.data;
      dispatch(setBuildingsStore(results));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: null
      });
    });
}

export const onSelectUser = (options) => dispatch => {
  dispatch({
    type: SELECT_USER
  });
  const { username } = options;
  const clientId = `client_id=${ACCESS_KEY}`

  axios.get(`${API_ROOT}/users/${username}?${clientId}`)
    .then(res => {
      const { data } = res;
      dispatch(setUserBuildingsStore(data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: null
      });
    });
}

export const onClearUsers = () => dispatch => {
  dispatch({
    type: CLEAR_USERS
  })
}

export const setUserBuildingsStore = decoded => {
  return {
    type: SELECT_USER_SUCCESS,
    payload: decoded
  }
}

export const setBuildingsStore = decoded => {
  return {
    type: GET_USERS_SUCCESS,
    payload: decoded
  }
}
