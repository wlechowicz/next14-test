export type Series = {
  backdrop_path: string;
  genres: Record<string, string>[];
  id: number;
  overview: string;
  poster_path: string;
  first_air_date: string;
  last_air_date: string;
  tagline: string;
  seasons: Record<string, string>[];
  name: string;
  number_of_seasons: number;
  number_of_episodes: number;
};
