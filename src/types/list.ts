export enum ListActionTypes {
  SET_LIST = "SET_LIST",
}

export type TList = {
  list: number;
};

interface SetListAction {
  type: ListActionTypes.SET_LIST;
  payload: TList;
}

export type ListAction = SetListAction;
