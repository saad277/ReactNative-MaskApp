import {combineReducers} from 'redux';
import authReducer from './auth-reducer';
import mediaReducer from './media-reducer';
import locationReducer from './location-reducer';

export default combineReducers({
  auth: authReducer,
  media: mediaReducer,
  location: locationReducer,
});
