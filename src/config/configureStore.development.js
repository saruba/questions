import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules/rootReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/rootReducer', () => {
      const nextRootReducer = require('../modules/rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
