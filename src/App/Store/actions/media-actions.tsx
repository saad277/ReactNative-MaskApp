import {Dispatch} from 'redux';

import {apiUrl} from '../../Config';

interface MediaBody {}

export enum MediaActionTypes {
  UPLOAD = 'UPLOAD',
}

export const upload = (payload: MediaBody) => (dispatch: Dispatch) => {
  console.log(payload);

  return fetch(apiUrl + '/classify', {
    method: 'POST',
    body: payload,
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
