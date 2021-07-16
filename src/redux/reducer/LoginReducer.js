import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from '../types';

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
  error: {},
};

export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
