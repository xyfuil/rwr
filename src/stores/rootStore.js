import { createStore, applyMiddleware } from 'redux';
import defaultReducer from '../reducers/defaultReducer'

var trunkMiddleware = function (params) {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action(params.dispatch, params.getState);
      } else {
        return next(action);
      }
    }
  }
};

var finalCreateStore = applyMiddleware(trunkMiddleware)(createStore);

function rootStore() {
  const store = finalCreateStore(defaultReducer);

  return store;
}

export default rootStore;
