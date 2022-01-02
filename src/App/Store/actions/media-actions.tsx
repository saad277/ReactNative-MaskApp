import {Dispatch} from 'redux';
import Snackbar from 'react-native-snackbar';

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
  LISTING_REQUEST = 'LISTING_REQUEST',
  LISTING_SUCCESS = 'LISTING_SUCCESS',
  LISTING_FAILURE = 'LISTING_FAILURE',
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

export const uploadToEval =
  (body: any) => (dispatch: Dispatch, getState: Function) => {
    const token = getState()?.auth?.user?.Token;

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

export const getListing = () => (dispatch: Dispatch, getState: Function) => {
  const token = getState()?.auth?.user?.Token;

  dispatch({
    type: MediaActionTypes.LISTING_REQUEST,
  });

  return httpRequest
    .get('/media/listing', getConfig(token))
    .then((res) => {
      dispatch({
        type: MediaActionTypes.LISTING_SUCCESS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      Snackbar.show({
        text: getError(err),
        duration: Snackbar.LENGTH_SHORT,
      });
      dispatch({
        type: MediaActionTypes.LISTING_FAILURE,
      });
      return Promise.reject(err);
    });
};
