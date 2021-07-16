import { combineReducers } from 'redux'
import loginReducer from './LoginReducer';
import signupReducer from './SignupReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  auth:  loginReducer
});

export default rootReducer;
