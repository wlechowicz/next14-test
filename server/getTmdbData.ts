import { Video } from "@/types/Video";

type VideoKey = keyof Video;

function pick(src: Video, ...keys: VideoKey[]) {
  return keys.reduce<Video>((result, key) => {
    if (src[key] === undefined) {
      return result;
    }

    return { ...result, [key]: src[key] };
  }, {} as Video);
}

export default async function getTmdbData(
  endpoint: string,
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
      const result = (json.results || [])
        .slice(0, 5)
        .map((video: Video) => pick(video, "id", "title", "poster_path"));
      return resolve ? resolve(result) : result;
    });
}
