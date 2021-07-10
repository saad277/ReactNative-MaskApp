import {AuthActionType} from '../actions';

interface AuthState {
  user: '' | string;
}

interface ActionType {
  type: string;
  payload: object;
}

const initialState = {
  user: '',
};

export default (state = initialState, action: ActionType): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return state;

    default:
      return state;
  }
};
