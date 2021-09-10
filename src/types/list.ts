export enum ListActionTypes {
  SET_CHOSEN_LIST = "SET_CHOSEN_LIST",
}

export type TList = {
  list: string;
};

interface SetChosenListAction {
  type: ListActionTypes.SET_CHOSEN_LIST;
  payload: TList;
}

export type ListAction = SetChosenListAction;
