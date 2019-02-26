import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const storeCompose = composeEnhancers(applyMiddleware(...middleware))(
  createStore
);
const store = storeCompose(reducers);

export { store, sagaMiddleware };
