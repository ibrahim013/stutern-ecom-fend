import jwt_decode from 'jwt-decode';
import setAuthHeader from './setAuthHeader';

const checkAuth = () => {
  let decode;

  if (localStorage.token) {
    setAuthHeader(localStorage.token);
    decode = jwt_decode(localStorage.token);

    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
  return decode || {};
};
export default checkAuth;
