import { IAnimeChoice } from "./../../types/anime";
import { AnimeActionTypes, ChosenAnimeState } from "../../types/anime";
import { AnimeAction } from "../../types/anime";

const initialState: ChosenAnimeState = {
  chosen: [],
  displayed: false,
};

const anime = (state = initialState, action: AnimeAction): ChosenAnimeState => {
  switch (action.type) {
    case AnimeActionTypes.SHOW_CHOSEN_ANIME:
      return {
        ...state,
        chosen: action.payload,
        displayed: true,
      };
    case AnimeActionTypes.HIDE_CHOSEN_ANIME:
      return initialState;
    default:
      return state;
  }
};

export default anime;
