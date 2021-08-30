import { AnimeState } from "./../../types/anime";

export const setAnime = (anime: AnimeState) => ({
  type: "SET_ANIME",
  payload: anime,
});
