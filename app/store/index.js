import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";

import {rootReducer} from "./reducers";
import rootSaga from "./sagas";
import {navMiddleware} from "../navigation/AppNavigator";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, navMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return store
}