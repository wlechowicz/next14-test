import { Video } from "@/types/Video";
import { Series } from "@/types/Series";

type ListResult<T> = {
  results: T[];
};

type PickAllowedType = Video | Series;

type KeysOfType<T> = {
  [K in keyof T]: K;
}[keyof T];

function pick<T extends PickAllowedType, K extends KeysOfType<T>>(
  src: T,
  keys: K[]
): Pick<T, K> {
  return keys.reduce((picked: any, key) => {
    picked[key] = src[key];
    return picked;
  }, {});
}

async function getData<T>(endpoint: string, options = {}) {
  return fetch(`https://api.themoviedb.org/3/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
    ...options,
  })
    .then((res) => res.json())
    .then((json) => {
      if (json?.success === false) {
        return null;
      }

      return json as T;
    });
}

export async function getTmdbVideoList(
  endpoint: string,
  limit: number = 8,
  resolve: Function | null = null
) {
  const data = await getData<ListResult<Video | Series>>(endpoint);

  if (!(data && data.results)) {
    return resolve ? resolve(null) : null;
  }

  const capLimit = Math.min(limit, 50);

  const result = data.results.slice(0, capLimit).map((video) => {
    // TODO: I think it would be better to separate getVideoList and getSeriesList
    // and have the List component call the right function
    if ("title" in video) {
      // video is of type Video
      return pick(video, ["id", "title", "poster_path"]);
    } else {
      // video is of type Series
      return pick(video, ["id", "name", "poster_path"]);
    }
  });
  return resolve ? resolve(result) : result;
}

export async function getTmdbVideoDetails(movieId: string) {
  const data = await getData<Video>(`movie/${movieId}`);

  if (!data) {
    return null;
  }

  return pick(data, [
    "id",
    "title",
    "backdrop_path",
    "genres",
    "overview",
    "release_date",
    "tagline",
  ]);
}

export async function getTmdbUpcomingHero() {
  const data = await getData<ListResult<Video>>(
    `movie/now_playing?page=1&language=en-US`,
    {
      next: {
        revalidate: 43200, // 12 hours
      },
    }
  );

  if (!(data && data.results?.length)) {
    return null;
  }

  const movies = data.results;

  const randomIdx = Math.floor(Math.random() * movies.length);

  return pick(movies[randomIdx], [
    "id",
    "title",
    "backdrop_path",
    "release_date",
  ]);
}

export async function getTmdbSeriesDetails(seriesId: string) {
  const data = await getData<Series>(`tv/${seriesId}`);

  if (!data) {
    return null;
  }

  return pick(data, [
    "id",
    "name",
    "backdrop_path",
    "genres",
    "overview",
    "first_air_date",
    "tagline",
  ]);
}

export async function getTmdbEpisodeDetails(
  seriesId: string,
  season: number,
  episode: number
) {
  // TODO: Episode type
  const data = await getData<any>(
    `tv/${seriesId}/season/${season}/episode/${episode}`
  );

  if (!data) {
    return null;
  }

  return pick(data, [
    "id",
    "name",
    "overview",
    "still_path",
    "season_number",
    "episode_number",
  ]);
}
