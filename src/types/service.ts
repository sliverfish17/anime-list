export interface ISearch {
  status: number;
  data: {
    last_page: number;
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
    results: TResults[];
  };
}

export type TResults = {
  mal_id: number | null;
  title: string;
  type: string;
  score: number;
  episodes: number;
};
