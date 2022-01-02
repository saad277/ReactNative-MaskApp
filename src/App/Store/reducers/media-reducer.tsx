import {MediaActionTypes} from '../actions';

interface MediaState {
  list: object;
  fetching: boolean;
}

interface ActionType {
  type: string;
  payload: object;
}

const initialState = {
  list: [],
  fetching: false,
};

export default (state = initialState, action: ActionType): MediaState => {
  switch (action.type) {
    case MediaActionTypes.LISTING_REQUEST:
      return {
        ...state,
        fetching: true,
        list: [],
      };

    case MediaActionTypes.LISTING_SUCCESS:
      return {
        ...state,
        fetching: false,
        list: action.payload,
      };

    case MediaActionTypes.LISTING_FAILURE:
      return {
        ...state,
        fetching: false,
      };

    default:
      return state;
  }
};
