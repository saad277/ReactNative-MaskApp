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
    .then(async (res) => {
      let token = res.data.Token;
      await AsyncStorage.setItem('token', token);
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
      dispatch({
        type: AuthActionType.ME_SUCCESS,
        payload: {Token: token, ...res.data},
      });

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
