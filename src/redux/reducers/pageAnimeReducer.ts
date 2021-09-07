import {
  AnimeActionTypes,
  DisplayedAnimeState,
  AnimeAction,
} from "../../types/anime";

const initialState: any = {
  items: [],
  loading: true,
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
        loading: false,
      };
    case AnimeActionTypes.ADD_NEW_ANIME:
      return {
        ...state,
        items: [[...state.items[0], action.payload]],
        loading: false,
      };
    case AnimeActionTypes.REMOVE_ANIME:
      const updatedArray = state.items[0].filter(
        (item) => item.mal_id !== action.payload
      );
      return { ...state, items: [updatedArray] };
    default:
      return state;
  }
};

export default anime;
