import { createStore, combineReducers } from 'redux'

import slideReducer from '../reducers/slideReducer';

const rootReducer = combineReducers({
  slide: slideReducer
});
const preloadedState = window.__PRELOADED_STATE__;
export const store = createStore(rootReducer,preloadedState);