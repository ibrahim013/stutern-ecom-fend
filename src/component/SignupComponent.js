import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { signupAsync } from '../redux/action/SignupAction';

const SignupComponent = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({});

  const handelFormChanges = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const validateCP = () => {
    if (signupData.password === signupData.confirmPassword) {
      return {
        isMatch: true,
        cPassword: 'march',
      };
    }
    return {
      isMatch: false,
      cPassword: 'Password does not match',
    };
  };

  //
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const passwordMatch = validateCP();
    if (!passwordMatch.isMatch) {
      return setError({
        ...error,
        passwordMatch,
      });
    }

    //call signup action
    dispatch(signupAsync(signupData));
  };

  return (
    <Container>
      <h1>Sign up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={handelFormChanges}
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handelFormChanges}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignupComponent;
