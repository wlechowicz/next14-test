import { getTmdbVideoList } from "@/server/getTmdbData";
import { MovieTile } from "./MovieTile.client";

import type { Video } from "@/types/Video";

export default async function ListOfMovies({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  async function fetchMovieData(): Promise<Video[]> {
    return getTmdbVideoList(url);
  }

  const movieList = await fetchMovieData();

  return (
    <div className="flex flex-row gap-x-2 w-full">
      {movieList.map((movie) => (
        <MovieTile movie={movie} key={`movieTile-${name}-${movie.id}`} />
      ))}
    </div>
  );
}
