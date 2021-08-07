import {Dispatch} from 'redux';

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
      console.log('res--->', response);
    })
    .catch((err) => {
      console.log(err);
    });
};
