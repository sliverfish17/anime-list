import { TAnime } from "./../../types/anime";
import { ISearch } from "./../../types/service";

export const setNewAnime = (anime: ISearch[]) => ({
  type: "SET_NEW_ANIME",
  payload: anime,
});

export const addNewAnime = (anime: TAnime) => ({
  type: "ADD_NEW_ANIME",
  payload: anime,
});

export const removeAnime = (anime: TAnime) => ({
  type: "REMOVE_ANIME",
  payload: anime,
});
