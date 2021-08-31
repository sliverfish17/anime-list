import { ChosenAnimeState } from "../../types/anime";

export const showChosenAnime = (anime: ChosenAnimeState) => ({
  type: "SHOW_CHOSEN_ANIME",
  payload: anime,
});

export const hideChosenAnime = () => ({
  type: "HIDE_CHOSEN_ANIME",
});
