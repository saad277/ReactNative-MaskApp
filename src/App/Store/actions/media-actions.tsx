import {Dispatch} from 'redux';
import Snackbar from 'react-native-snackbar';

import {store} from '../../Store';

import {
  ec2Request,
  formConfig,
  getError,
  httpRequest,
  getConfig,
} from '../../Utils/requestUtils';

export enum MediaActionTypes {
  UPLOAD = 'UPLOAD',
  UPLOAD_TO_EVAL = 'UPLOAD_TO_EVAL',
}

export const upload = (body: any) => (dispatch: Dispatch) => {
  return ec2Request
    .post('/classify', body, formConfig)
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

export const uploadToEval = (body: any) => (dispatch: Dispatch) => {
  const token = store.getState()?.auth?.user?.Token;

  return httpRequest
    .post('/media/upload', body, getConfig(token))
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


