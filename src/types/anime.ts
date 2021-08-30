export interface AnimeState {
  chosenAnime: IAnimeChoice[];
}

export enum AnimeActionTypes {
  SHOW_CHOSEN_ANIME = "SHOW_CHOSEN_ANIME",
  HIDE_CHOSEN_ANIME = "HIDE_CHOSEN_ANIME",
}

interface ShowAnimeAction {
  type: AnimeActionTypes.SHOW_CHOSEN_ANIME;
  payload: IAnimeChoice[];
}

interface HideAnimeAction {
  type: AnimeActionTypes.HIDE_CHOSEN_ANIME;
  payload: [];
}

export type AnimeAction = ShowAnimeAction | HideAnimeAction;

export interface IAnimeChoice {
  data: {
    airing: boolean;
    episodes: number;
    mal_id: number;
    rank: number;
    premiered: string;
    title: string;
    chosenAnime: IAnimeChoice[];
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
  chosenAnime: TAnime;
  synopsis: string;
  aired: {
    from: string;
    to: string;
  };
  genres: {
    name: string;
  }[];
};
