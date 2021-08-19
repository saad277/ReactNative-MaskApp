import {Dispatch} from 'redux';
import Snackbar from 'react-native-snackbar';

import {apiUrl, EC2Url} from '../../Config';

import {ec2Request, formConfig, getError} from '../../Utils/requestUtils';

export enum MediaActionTypes {
  UPLOAD = 'UPLOAD',
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
