import getTmdbData from "@/getTmdbData";
import { MovieTile } from "./MovieTile.client";

import type { Data } from "./ListOfMovies";

export default async function YouMayAlsoLikeList() {
  async function fetchMovieData(): Promise<Data[]> {
    "use server";
    return new Promise((resolve) => {
      // the delay simulates some user-specific operations, like fetching recommendations,
      // which suspend the component
      setTimeout(() => getTmdbData("movie/popular", resolve), 3000);
    });
  }

  const movieList = await fetchMovieData();

  return (
    <div className="flex flex-row gap-x-1">
      {movieList.map((movie) => (
        <MovieTile movie={movie} key={`movieTile-youmayalsolike-${movie.id}`} />
      ))}
    </div>
  );
}
