import { TList } from "./../../types/list";
import { ListAction, ListActionTypes } from "../../types/list";

const initialState: TList = {
  list: "",
};

const animeList = (state = initialState, action: ListAction) => {
  switch (action.type) {
    case ListActionTypes.SET_CHOSEN_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default animeList;
