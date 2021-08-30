import { AnimeState } from "./../../types/anime";

export const showChosenAnime = (anime: AnimeState) => ({
  type: "SHOW_CHOSEN_ANIME",
  payload: anime,
});

export const hideChosenAnime = () => ({
  type: "HIDE_CHOSEN_ANIME",
});
