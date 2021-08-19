import {LocationActionType} from '../actions';

interface ActionType {
  type: string;
  payload: object;
}

interface LocationState {
  location: null | object;
}

const initialState = {
  location: null,
};

export default (state = initialState, action: ActionType): LocationState => {
  switch (action.type) {
    case LocationActionType.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};
