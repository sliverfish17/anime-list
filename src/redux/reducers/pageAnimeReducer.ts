import {
  AnimeActionTypes,
  DisplayedAnimeState,
  AnimeAction,
} from "../../types/anime";

const initialState: any = {
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
    case AnimeActionTypes.ADD_NEW_ANIME:
      return {
        ...state,
        items: [[...state.items[0], action.payload]],
      };
    default:
      return state;
  }
};

export default anime;
