import axios from 'axios';
import {
  API_REQUEST,
  apiSuccess,
  apiError,
} from '../../actions/api';

const request = (url, method, data) => (
  axios.request({
    url,
    method,
    data,
  })
);

const apiMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta;

    request(url, method)
      .then(response => dispatch(apiSuccess(response, feature)))
      .catch(error => dispatch(apiError(error, feature)));
  }
};

export default apiMiddleware;
