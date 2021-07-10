import {MediaActionTypes} from '../actions';

interface MediaState {
  media: object;
}

interface ActionType {
  type: string;
  payload: object;
}

const initialState = {
  media: [],
};

export default (state = initialState, action: ActionType): MediaState => {
  switch (action.type) {
    case MediaActionTypes.UPLOAD:
      return state;

    default:
      return state;
  }
};
