import {Dispatch} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import {
  httpRequest,
  postConfig,
  getError,
  getConfig,
} from '../../Utils/requestUtils';

interface LoginBody {
  Email: string;
  Password: string;
}

export enum AuthActionType {
  ME_SUCCESS = 'ME_SUCCESS',
}

export const login = (payload: LoginBody) => (dispatch: Dispatch) => {
  return httpRequest
    .post('/login', payload, postConfig)
    .then((res) => {
      let token = res.data.Token;
      return dispatch(getMe(token) as any);
    })
    .catch((err) => {
      Snackbar.show({
        text: getError(err),
        duration: Snackbar.LENGTH_SHORT,
      });
      return Promise.reject(err);
    });
};

export const getMe = (token: string) => (dispatch: Dispatch) => {
  return httpRequest
    .get('/user/me', getConfig(token))
    .then((res) => {
      console.log(res.data);

      return Promise.resolve(res.data);
    })
    .catch((err) => {
      Snackbar.show({
        text: getError(err),
        duration: Snackbar.LENGTH_SHORT,
      });
      return Promise.reject(err);
    });
};
