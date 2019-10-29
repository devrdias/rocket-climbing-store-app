import { combineReducers } from 'redux';
import LoadingReducer from './loading/loading.reducer';

export default combineReducers({
  loading: LoadingReducer,
});
