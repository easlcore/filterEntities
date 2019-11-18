import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { entitiesReducer } from './entitiesReducer';

export const createRootReducer = (history) =>  combineReducers({
  router: connectRouter(history),
  entities: entitiesReducer
});
