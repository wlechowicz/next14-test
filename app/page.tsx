import { Suspense } from "react";
import ListOfMovies from "@/components/ListOfMovies";
import YouMayAlsoLikeList from "@/components/YouMayAlsoLikeList";
import ListSkeleton from "@/components/ListSkeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 text-slate-500">
      <div className="flex mx-auto items-center justify-around flex-col">
        <img
          src="/hero.jpg"
          className="rounded w-full"
          alt="Image by upklyak on Freepik"
        />
        <span className="text-slate-700">
          A hero image is an image of a hero. In landscape.
        </span>
      </div>
      <div className="flex mx-auto py-10 items-center justify-around flex-col">
        <h3>
          You may also like - simulated user-specific, dynamic list, 3s delay
        </h3>
        <Suspense fallback={<ListSkeleton />}>
          <YouMayAlsoLikeList />
        </Suspense>
      </div>
      <div className="flex mx-auto py-10 items-center justify-center flex-col">
        <h3>Popular Comedies (static)</h3>
        <ListOfMovies
          name={"popularcomedies"}
          url={"discover/movie?with_genres=35"}
        />
      </div>
      <div className="flex mx-auto py-10 items-center justify-center flex-col">
        <h3>Top Rated (static)</h3>
        <ListOfMovies name={"toprated"} url={"movie/top_rated"} />
      </div>
      <div className="flex mx-auto py-10 items-center justify-around flex-col">
        <h3>Upcoming (static)</h3>
        <ListOfMovies name={"upcoming"} url={"movie/upcoming"} />
      </div>
    </main>
  );
}
