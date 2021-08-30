import { AnimeActionTypes, AnimeState } from "./../../types/anime";
import { AnimeAction } from "../../types/anime";

const initialState = {
  chosenAnime: [],
};

const anime = (state = initialState, action: AnimeAction): AnimeState => {
  switch (action.type) {
    case AnimeActionTypes.SHOW_CHOSEN_ANIME:
      return {
        ...state,
        chosenAnime: action.payload,
      };
    case AnimeActionTypes.HIDE_CHOSEN_ANIME:
      return initialState;
    default:
      return state;
  }
};

export default anime;
