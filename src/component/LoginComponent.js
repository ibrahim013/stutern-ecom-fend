import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { loginUserAsync } from '../redux/action/LoginAction';
import { useMemo } from 'react';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  const { auth } = useSelector((state) => state);

  useMemo(() => {
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }, [auth, history]);
  
  const handelFormChanges = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { name, value } = event.target;

    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(loginUserAsync(loginCredentials));
  };

  return (
    <Container className="mt-4">
      {/* <Alert >
        
      </Alert> */}
      <h5>Login Form</h5>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handelFormChanges}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handelFormChanges}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginComponent;
