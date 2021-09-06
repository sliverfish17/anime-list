import { ChosenAnimeState } from "../../types/anime";

export const showChosenAnime = (anime: ChosenAnimeState) => ({
  type: "SHOW_CHOSEN_ANIME",
  payload: anime,
  displayed: true,
});

export const hideChosenAnime = () => ({
  type: "HIDE_CHOSEN_ANIME",
});
