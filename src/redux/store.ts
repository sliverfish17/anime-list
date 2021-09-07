import { rootReducer } from "./reducers/index";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const saveState = (state: string | undefined) => {
  if (state) localStorage.setItem("uid", state);
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem("uid");
    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const oldState = loadState();

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  oldState,
  composeEnchancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState().userInfo.user?.uid);
});

export default store;
