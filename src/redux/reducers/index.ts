import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
  user: userReducer,
  anime: animeReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "SET_USER_LOGGED_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
