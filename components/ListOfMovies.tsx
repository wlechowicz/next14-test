import getTmdbData from "@/server/getTmdbData";
import { MovieTile } from "./MovieTile.client";

export type Data = {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
};

export default async function ListOfMovies({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  async function fetchMovieData(): Promise<Data[]> {
    return getTmdbData(url);
  }

  const movieList = await fetchMovieData();

  return (
    <div className="flex flex-row gap-x-1 w-full">
      {movieList.map((movie) => (
        <MovieTile movie={movie} key={`movieTile-${name}-${movie.id}`} />
      ))}
    </div>
  );
}
