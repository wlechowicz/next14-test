import { Suspense } from "react";
import ListOfAssets from "@/components/ListOfAssets";
import DynamicList from "@/components/DynamicListOfAssets";
import ListSkeleton from "@/components/ListSkeleton";
import HeroMovie from "@/components/HeroMovie";
import ListTitle from "@/components/ListTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-0 py-0">
      <HeroMovie />
      <div className="px-4">
        <ListTitle title="Upcoming">
          <ListOfAssets name="upcoming" url="movie/upcoming" />
        </ListTitle>
        <ListTitle title="Top Picks For You">
          <Suspense fallback={<ListSkeleton />}>
            <DynamicList name="toppicks" url="movie/popular" />
          </Suspense>
        </ListTitle>
        <ListTitle title="Top TV Shows">
          <ListOfAssets name="popularshows" url="tv/top_rated" type="show" />
        </ListTitle>
        <ListTitle title="Popular Comedies">
          <ListOfAssets
            name="popularcomedies"
            url="discover/movie?with_genres=35"
          />
        </ListTitle>
        <ListTitle title="Top Rated Movies">
          <ListOfAssets name="toprated" url="movie/top_rated" />
        </ListTitle>
      </div>
    </main>
  );
}
