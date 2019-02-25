import { combineReducers } from 'redux';

import exampleEntityReducer from './entities/exampleEntityReducer';

const entitiesReducer = combineReducers({
  exampleEntity: exampleEntityReducer,
});

export default entitiesReducer;
