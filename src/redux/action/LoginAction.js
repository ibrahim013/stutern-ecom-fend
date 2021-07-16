import { config } from '../../config';
import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from '../types';
import setAuthHeader from '../../utility/setAuthHeader';

const { BASEURL } = config;

const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  payload: err,
});

export const loginUserAsync = (data) => async (dispatch) => {
  //validate function
  try {
    dispatch(loginStart());
    const response = await axios.post(`${BASEURL}/users/login`, data);
    localStorage.setItem('token', response.data.data.token.split(" ")[1]);
    setAuthHeader(response.data.data.token);
    dispatch(loginSuccess(response.data.data));
  } catch (err) {
    dispatch(loginFailure(err.response));
  }
};
