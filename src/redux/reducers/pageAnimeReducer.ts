import {
  AnimeActionTypes,
  DisplayedAnimeState,
  AnimeAction,
} from "../../types/anime";

const initialState = {
  items: [],
};

const anime = (
  state = initialState,
  action: AnimeAction
): DisplayedAnimeState => {
  switch (action.type) {
    case AnimeActionTypes.SET_NEW_ANIME:
      return {
        ...state,
        items: [action.payload],
      };
    default:
      return state;
  }
};

export default anime;
