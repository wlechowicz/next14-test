import getTmdbData from "@/server/getTmdbData";
import { MovieTile } from "./MovieTile.client";
import { cookies } from "next/headers";

import type { Video } from "@/types/Video";

type UserData = {
  userId?: string;
};

export default async function YouMayAlsoLikeList() {
  async function fetchMovieData(): Promise<[Video[], UserData]> {
    // using cookies to force a PPR
    // with just the artificial delay, it waits for the component
    // to render during build time, so no PPR
    const cookieName = "user-cookie-stuff";
    const user = cookies().has(cookieName) && cookies().get(cookieName);
    const userId = user && user.value ? JSON.parse(user.value) : {};
    return Promise.all([
      new Promise<Video[]>((resolve) => {
        // the delay simulates some user-specific operations, like fetching recommendations,
        // which suspend the component
        setTimeout(() => getTmdbData("movie/popular", resolve), 3000);
      }),
      userId,
    ]);
  }

  const [movieList, { userId }] = await fetchMovieData();

  return (
    <>
      <span className="text-xs">
        {userId
          ? `userId from cookie: ${userId}`
          : 'set a cookie in your browser - name: "user-cookie-stuff" value: {"userId":"some-string"}'}
      </span>
      <div className="flex flex-row gap-x-1 w-full">
        {movieList.map((movie) => (
          <MovieTile
            movie={movie}
            key={`movieTile-youmayalsolike-${movie.id}`}
          />
        ))}
      </div>
    </>
  );
}
