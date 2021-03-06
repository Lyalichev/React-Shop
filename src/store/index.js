import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

import { user } from './user';
import { createUser } from './createUser';
import { info, category } from './category';
import { categories } from './categories';
import { products } from './products';
import { product } from './product';
import { error } from './status';

const rootReducers = combineReducers({
  user,
  createUser,
  info,
  category,
  categories,
  products,
  product,
  error
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const runSaga = () => sagaMiddleware.run(rootSaga);
