export interface ChosenAnimeState {
  chosen: IAnimeChoice[];
}

export interface DisplayedAnimeState {
  items: TAnime[];
}

export enum AnimeActionTypes {
  SHOW_CHOSEN_ANIME = "SHOW_CHOSEN_ANIME",
  HIDE_CHOSEN_ANIME = "HIDE_CHOSEN_ANIME",
  SET_NEW_ANIME = "SET_NEW_ANIME",
}

interface ShowAnimeAction {
  type: AnimeActionTypes.SHOW_CHOSEN_ANIME;
  payload: IAnimeChoice[];
}

interface HideAnimeAction {
  type: AnimeActionTypes.HIDE_CHOSEN_ANIME;
  payload: [];
}

interface SetNewAnimeAction {
  type: AnimeActionTypes.SET_NEW_ANIME;
  payload: TAnime;
}

export type AnimeAction = ShowAnimeAction | HideAnimeAction | SetNewAnimeAction;

export interface IAnimeChoice {
  data: {
    airing: boolean;
    episodes: number;
    mal_id: number;
    rank: number;
    premiered: string;
    title: string;
    chosen: IAnimeChoice[];
  };
}

export type TAnime = {
  image_url: string;
  airing: boolean;
  type: string;
  episodes: number;
  mal_id: number;
  rank: number;
  premiered: string;
  title: string;
  chosen: TAnime;
  synopsis: string;
  aired: {
    from: string;
    to: string;
  };
  genres: {
    name: string;
  }[];
};
