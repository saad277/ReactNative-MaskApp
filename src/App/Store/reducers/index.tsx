import {combineReducers} from 'redux';
import authReducer from './auth-reducer';
import mediaReducer from './media-reducer';

export default combineReducers({
  auth: authReducer,
  media: mediaReducer,
});
