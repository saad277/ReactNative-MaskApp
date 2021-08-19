import {Dispatch} from 'redux';

export enum LocationActionType {
  SET_LOCATION = 'SET_SUCCESS',
}

export const setLocation = (payload: any) => (dispath: Dispatch) => {
  dispath({
    type: LocationActionType.SET_LOCATION,
    payload,
  });
};
