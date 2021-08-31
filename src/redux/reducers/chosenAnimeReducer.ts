import { AnimeActionTypes, ChosenAnimeState } from "../../types/anime";
import { AnimeAction } from "../../types/anime";

const initialState = {
  chosen: [],
};

const anime = (state = initialState, action: AnimeAction): ChosenAnimeState => {
  switch (action.type) {
    case AnimeActionTypes.SHOW_CHOSEN_ANIME:
      return {
        ...state,
        chosen: action.payload,
      };
    case AnimeActionTypes.HIDE_CHOSEN_ANIME:
      return initialState;
    default:
      return state;
  }
};

export default anime;
