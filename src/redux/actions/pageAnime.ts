import { TAnime } from "./../../types/anime";
import { ISearch } from "./../../types/service";

export const setAnimeList = (anime: ISearch[]) => ({
  type: "SET_ANIME_LIST",
  payload: anime,
});

export const addNewAnime = (anime: TAnime) => ({
  type: "ADD_NEW_ANIME",
  payload: anime,
});

export const removeAnime = (animeId: number) => ({
  type: "REMOVE_ANIME",
  payload: animeId,
});
