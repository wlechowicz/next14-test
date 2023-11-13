import { getTmdbVideoList } from "@/server/getTmdbData";
import { AssetTile } from "./AssetTile.client";

import type { Video } from "@/types/Video";

export default async function ListOfAssets({
  name,
  url,
  type = "movie",
}: {
  name: string;
  url: string;
  type?: string;
}) {
  async function fetchMovieData(): Promise<Video[]> {
    return getTmdbVideoList(url);
  }

  const movieList = await fetchMovieData();

  return (
    <div className="grid grid-cols-8 gap-x-2 w-full">
      {movieList.map((movie) => (
        <AssetTile
          asset={movie}
          type={type}
          key={`movieTile-${name}-${movie.id}`}
        />
      ))}
    </div>
  );
}
