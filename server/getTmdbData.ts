import { Video } from "@/types/Video";

type VideoKey = keyof Video;

function pick(
  src: Video,
  keys: VideoKey[]
): Pick<Video, (typeof keys)[number]> {
  return keys.reduce<Video>((result, key) => {
    if (src[key] === undefined) {
      return result;
    }

    return { ...result, [key]: src[key] };
  }, {} as Video);
}

export async function getTmdbVideoList(
  endpoint: string,
  limit: number = 5,
  resolve: Function | null = null
) {
  "use server";
  return fetch(`https://api.themoviedb.org/3/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json?.success === false) {
        return resolve ? resolve(null) : null;
      }

      const capLimit = Math.min(limit, 50);

      const result = json.results
        .slice(0, capLimit)
        .map((video: Video) => pick(video, ["id", "title", "poster_path"]));
      return resolve ? resolve(result) : result;
    });
}

export async function getTmdbVideoDetails(movieId: string) {
  "use server";
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json?.success === false) {
        return null;
      }

      return pick(json, [
        "id",
        "title",
        "backdrop_path",
        "genres",
        "overview",
        "release_date",
        "tagline",
      ]);
    });
}

export async function getTmdbUpcomingHero() {
  "use server";
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 43200, // 12 hours
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      if (json?.success === false || !json.results?.length) {
        return null;
      }

      const movies = json.results;

      const randomIdx = Math.floor(Math.random() * movies.length);

      return pick(json.results[randomIdx], ["id", "title", "backdrop_path"]);
    });
}
