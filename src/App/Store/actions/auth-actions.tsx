import {Dispatch} from 'redux';

interface LoginBody {}

export enum AuthActionType {
  LOGIN = 'Login',
}

export const login = (payload: LoginBody) => (dispatch: Dispatch) => {
  console.log(payload);
};
