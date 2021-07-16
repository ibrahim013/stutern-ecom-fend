import { config } from '../../config';
import axios from 'axios';
import { SIGN_UP_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS } from '../types';

const { BASEURL } = config;

const signupStart = () => ({
  type: SIGN_UP_START,
});

const signupSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  payload: data,
});

const signupFailure = (err) => ({
  type: SIGN_UP_FAILURE,
  payload: err,
});

export const signupAsync = (data) => async (dispatch) => {
  //validate function
  try {
    dispatch(signupStart());
    const response = await axios.post(`${BASEURL}/users/register`, data);
    dispatch(signupSuccess(response.data));
  } catch (err) {
    dispatch(signupFailure(err.response));
  }
};
