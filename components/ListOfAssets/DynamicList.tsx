import { getTmdbVideoList } from "@/server/getTmdbData";
import { AssetTile } from "./AssetTile.client";
import { cookies } from "next/headers";

import type { Video } from "@/types/Video";

type UserData = {
  userId?: string;
};

export default async function DynamicList({
  name,
  url,
  limit = 8,
}: {
  name: string;
  url: string;
  limit?: number;
}) {
  async function fetchMovieData(): Promise<[Video[], UserData]> {
    // using cookies to force a PPR
    // with just the artificial delay, it waits for the component
    // to render during build time, so no PPR
    const cookieName = "user-cookie-stuff";
    const user = cookies().has(cookieName) && cookies().get(cookieName);
    const userId = user && user.value ? JSON.parse(user.value) : {};
    return Promise.all([
      new Promise<Video[]>((resolve) => {
        setTimeout(() => getTmdbVideoList(url, limit, resolve), 2000);
      }),
      userId,
    ]);
  }

  const [movieList, { userId }] = await fetchMovieData();

  return (
    <>
      <span className="text-xs">
        {userId && `userId from cookie: ${userId}`}
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
