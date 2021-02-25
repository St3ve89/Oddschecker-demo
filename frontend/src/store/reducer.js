import { combineReducers } from 'redux';
import { oddscheckerReducer } from './oddschecker.reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    oddschecker: oddscheckerReducer,
    ...asyncReducers,
  });

export default createReducer;
