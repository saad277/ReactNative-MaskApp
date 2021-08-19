import {Dispatch} from 'redux';
import Snackbar from 'react-native-snackbar';

import {apiUrl} from '../../Config';

export enum MediaActionTypes {
  UPLOAD = 'UPLOAD',
}

export const upload = (body: any) => (dispatch: Dispatch) => {
  return fetch(apiUrl + '/classify', {
    method: 'POST',
    body,
  })
    .then((res) => res.json())
    .then((response) => {
      Snackbar.show({
        text: response.message,
        duration: Snackbar.LENGTH_SHORT,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
