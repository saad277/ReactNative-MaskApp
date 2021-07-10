import {Dispatch} from 'redux';

interface MediaBody {}

export enum MediaActionTypes {
  UPLOAD = 'UPLOAD',
}

export const upload= (payload: MediaBody) => (dispatch: Dispatch) => {
  console.log(payload);
};
