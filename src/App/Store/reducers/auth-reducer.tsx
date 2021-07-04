import {AuthActionType} from '../actions';

interface AuthState {
  user: '' | string;
}

const initialState = {
  user: '',
};

interface ActionType {
  type: string;
  payload: object;
}

export default (state = initialState, action: ActionType): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return state;

    default:
      return state;
  }
};
