import { combineReducers } from "redux";
import chosenAnimeReducer from "./chosenAnimeReducer";
import userReducer from "./userReducer";
import pageAnimeReducer from "./pageAnimeReducer";
import listReducer from "./listReducer";

const appReducer = combineReducers({
  userInfo: userReducer,
  shownAnime: chosenAnimeReducer,
  displayedAnime: pageAnimeReducer,
  activeList: listReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "SET_USER_LOGGED_OUT") {
    state = undefined;
    localStorage.clear();
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
