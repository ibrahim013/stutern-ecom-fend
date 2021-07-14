import { combineReducers } from 'redux'
import signupReducer from './SignupReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
});
export default rootReducer;
