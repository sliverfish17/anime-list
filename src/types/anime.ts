export interface ChosenAnimeState {
  chosen: IAnimeChoice[];
  displayed: boolean;
}

export interface DisplayedAnimeState {
  items: TAnime[][];
}

export enum AnimeActionTypes {
  SHOW_CHOSEN_ANIME = "SHOW_CHOSEN_ANIME",
  HIDE_CHOSEN_ANIME = "HIDE_CHOSEN_ANIME",
  SET_NEW_ANIME = "SET_NEW_ANIME",
  ADD_NEW_ANIME = "ADD_NEW_ANIME",
  REMOVE_ANIME = "REMOVE_ANIME",
}

interface ShowAnimeAction {
  type: AnimeActionTypes.SHOW_CHOSEN_ANIME;
  payload: IAnimeChoice[];
  displayed: boolean;
}

interface HideAnimeAction {
  type: AnimeActionTypes.HIDE_CHOSEN_ANIME;
  payload: [];
}

interface SetNewAnimeAction {
  type: AnimeActionTypes.SET_NEW_ANIME;
  payload: TAnime;
}

interface AddNewAnimeAction {
  type: AnimeActionTypes.ADD_NEW_ANIME;
  payload: TAnime;
}

interface RemoveAnime {
  type: AnimeActionTypes.REMOVE_ANIME;
  payload: TAnime;
}

export type AnimeAction =
  | ShowAnimeAction
  | HideAnimeAction
  | SetNewAnimeAction
  | AddNewAnimeAction
  | RemoveAnime;

export interface IAnimeChoice {
  data: {
    airing: boolean;
    episodes: number;
    mal_id: number;
    rank: number;
    premiered: string;
    title: string;
    chosen: IAnimeChoice[];
    displayed: boolean;
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
