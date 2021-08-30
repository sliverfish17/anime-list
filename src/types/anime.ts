export interface AnimeState {
  animeId: number | null;
  anime: IAnimeChoice[];
}

export enum AnimeActionTypes {
  SET_ANIME = "SET_ANIME",
}

interface SetAnimeAction {
  type: AnimeActionTypes.SET_ANIME;
  payload: IAnimeChoice[];
}

export type AnimeAction = SetAnimeAction;

export interface IAnimeChoice {
  data: {
    airing: boolean;
    episodes: number;
    mal_id: number;
    rank: number;
    premiered: string;
    title: string;
    animeId: number | null;
    anime: IAnimeChoice[];
  };
}
