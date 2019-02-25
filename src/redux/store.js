import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import entitiesReducer from './reducers/entitiesReducer';
import uiReducer from './reducers/uiReducer';

import apiMiddleware from './middlewares/core/apiMiddleware';
import stateFreezer from './reducerEnhancers/stateFreezer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
});

const featureMiddlewares = [

];

const coreMiddlewares = [
  apiMiddleware,
  logger,
];

const configureStore = (preloadedState = {}) => createStore(
  stateFreezer(rootReducer),
  preloadedState,
  applyMiddleware(...featureMiddlewares, ...coreMiddlewares),
);

export default configureStore;
