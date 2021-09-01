import { ListAction, ListActionTypes } from "../../types/list";

const initialState = {
  list: 0,
};

const anime = (state = initialState, action: ListAction) => {
  switch (action.type) {
    case ListActionTypes.SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default anime;
