import { combineReducers } from "redux";
import chosenAnimeReducer from "./chosenAnimeReducer";
import userReducer from "./userReducer";
import pageAnimeReducer from "./pageAnimeReducer";

const appReducer = combineReducers({
  user: userReducer,
  shownAnime: chosenAnimeReducer,
  displayedAnime: pageAnimeReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "SET_USER_LOGGED_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
