import { getTmdbVideoList } from "@/server/getTmdbData";
import { AssetTile } from "./AssetTile.client";

import type { Video } from "@/types/Video";
import { getUser } from "@/server/user";

export default async function DynamicList({
  name,
  url,
  limit = 8,
}: {
  name: string;
  url: string;
  limit?: number;
}) {
  async function fetchMovieData() {
    // using cookies to force a PPR
    // with just the artificial delay, it waits for the component
    // to render during build time, so no PPR
    return Promise.all([
      new Promise<Video[]>((resolve) => {
        setTimeout(() => getTmdbVideoList(url, limit, resolve), 2000);
      }),
      getUser(),
    ]);
  }

  const [movieList, user] = await fetchMovieData();

  return (
    <>
      <span className="text-xs">
        {user && `username from cookie: ${user.username}`}
      </span>
      <div className="flex flex-row gap-x-2 w-full">
        {movieList.map((movie) => (
          <AssetTile
            asset={movie}
            type="movie"
            key={`movieTile-${name}-${movie.id}`}
          />
        ))}
      </div>
    </>
  );
}
