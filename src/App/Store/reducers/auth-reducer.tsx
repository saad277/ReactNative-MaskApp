import {AuthActionType} from '../actions';

interface AuthState {
  user: null | object;
  isAuthenticated: boolean;
}

interface ActionType {
  type: string;
  payload: object;
}

const initialState = {
  user: null,
  isAuthenticated: false,
};

export default (state = initialState, action: ActionType): AuthState => {
  switch (action.type) {
    case AuthActionType.ME_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload,
        },
        isAuthenticated: true,
      };

    case AuthActionType.LOG_OUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
