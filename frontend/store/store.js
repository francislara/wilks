import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const configureStore =  (preloadedState = {}) => (
  createStore(
    rootReducer, 
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
);

export default configureStore;