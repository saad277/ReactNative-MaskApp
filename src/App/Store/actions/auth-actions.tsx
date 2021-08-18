import {Dispatch} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import {httpRequest, postConfig, getError} from '../../Utils/requestUtils';

interface LoginBody {
  Email: string;
  Password: string;
}

export enum AuthActionType {
  LOGIN = 'LOGIN_SUCCESS',
}

export const login = (payload: LoginBody) => (dispatch: Dispatch) => {
  return httpRequest
    .post('/auth/user/login', payload, postConfig)
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
