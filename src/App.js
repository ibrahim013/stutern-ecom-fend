import './App.css';
import { Switch, Route } from 'react-router-dom';
import SignupComponent from './component/SignupComponent';
import LoginComponent from './component/LoginComponent';

// import checkAuth from './utility/checkAuth';
// import store from './redux/reducer/store';
// import { loginSuccess } from './redux/action/LoginAction';


// if(Object.keys(checkAuth()).length) {
//   store.dispatch(loginSuccess(checkAuth()))
// }

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/register" component={SignupComponent} />
      </Switch>
    </>
  );
}

export default App;
