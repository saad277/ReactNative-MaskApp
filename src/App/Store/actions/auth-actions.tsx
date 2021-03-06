import {Dispatch} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import {USER_TYPES} from '../../Constants';

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

interface SignUpBody {
  UserName: string;
  Password: string;
  Email: string;
  Type: USER_TYPES;
}

export enum AuthActionType {
  ME_SUCCESS = 'ME_SUCCESS',
  LOG_OUT = 'LOG_OUT',
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

export const signUp = (payload: SignUpBody) => () => {
  return httpRequest
    .post('/signUp', payload, postConfig)
    .then((res) => {
      Snackbar.show({
        text: res.data.Message,
        duration: Snackbar.LENGTH_SHORT,
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

      dispatch(logout() as any);
      return Promise.reject(err);
    });
};

export const logout = () => async (dispatch: Dispatch) => {
  dispatch(updateFcm({FcmToken: ''}) as any);

  await AsyncStorage.removeItem('token');

  dispatch({
    type: AuthActionType.LOG_OUT,
  });
};

export const updateFcm =
  (body: object) => (dispatch: Dispatch, getState: any) => {
    const token = getState()?.auth?.user?.Token;

    return httpRequest
      .post('/user/update-fcm', body, getConfig(token))
      .then((res) => {
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
