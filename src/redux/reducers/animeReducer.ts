import { AnimeActionTypes, AnimeState } from "./../../types/anime";
import { AnimeAction } from "../../types/anime";

const initialState = {
  animeId: null,
  anime: [],
};

const anime = (state = initialState, action: AnimeAction): AnimeState => {
  switch (action.type) {
    case AnimeActionTypes.SET_ANIME:
      return {
        ...state,
        anime: action.payload,
      };
    default:
      return state;
  }
};

export default anime;
