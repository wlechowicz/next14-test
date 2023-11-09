import { Suspense } from "react";
import ListOfAssets from "@/components/ListOfAssets";
import DynamicList from "@/components/ListOfAssets/DynamicList";
import ListSkeleton from "@/components/ListOfAssets/ListSkeleton";
import HeroMovie from "@/components/HeroMovie";
import ListTitle from "@/components/ListOfAssets/ListTitle";

export default async function Home({ params }: { params: { brand: string } }) {
  const { brand } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-0 py-0">
      <HeroMovie />

      <div className="px-4">
        <ListTitle title="Top Picks For You">
          <Suspense fallback={<ListSkeleton tiles={8} />}>
            <DynamicList name="toppicks" url="movie/popular" />
          </Suspense>
        </ListTitle>

        <ListTitle title="Upcoming">
          <ListOfAssets name="upcoming" url="movie/upcoming" />
        </ListTitle>

        <ListTitle title="Top TV Shows">
          <ListOfAssets name="popularshows" url="tv/top_rated" type="shows" />
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
