import { ChosenAnimeState } from "../../types/anime";

export const setNewAnime = (anime: ChosenAnimeState) => ({
  type: "SET_NEW_ANIME",
  payload: anime,
});
