import axios from 'axios';

import {apiUrl} from '../Config';
import {store} from '../Store';

interface errorBody {
  response: {
    data: {
      message: string;
    };
  };
}

export const httpRequest = axios.create({
  baseURL: apiUrl,
});

export const postConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getConfig = (token: string) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
};

export const getError = (error: errorBody) => {
  return error.response.data.message;
};
