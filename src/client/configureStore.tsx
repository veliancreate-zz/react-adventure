import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './state/reducers/';
import StoreState from './state/storeState';

const State: StoreState = {
  heroName: '',
};

export default function configureStore(initialState: StoreState = State) {
  const middlewares = [thunk];

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middlewares),
    ),
  );
}
