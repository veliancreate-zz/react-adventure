import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './client/state/reducers/';

export default function configureStore(initialState: {} = {}) {
  const middlewares = [thunk];

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middlewares),
    ),
  );
}
