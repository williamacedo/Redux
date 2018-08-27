import { combineReducers } from 'redux';
import AuthRedurcer from './reducers/AuthRedurcer';

const Reducers = combineReducers({
  auth:AuthRedurcer
});

export default Reducers;
