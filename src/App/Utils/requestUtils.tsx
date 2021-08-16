import axios from 'axios';

import {baseURL, EC2Url, apiUrl} from '../Config';
import {store} from '../Store';

export const httpRequst = axios.create({
  baseURL: baseURL,
});

const postConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getConfig = () => {
  let token;

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
};
