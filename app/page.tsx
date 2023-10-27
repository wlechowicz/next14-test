import { Suspense } from "react";
import ListOfMovies from "./ListOfMovies";
import YouMayAlsoLikeList from "./YouMayAlsoLikeList";
import ListSkeleton from "./ListSkeleton";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 text-slate-500">
      <div className="flex mx-auto p-10 items-center justify-around flex-col">
        <img src="/hero.jpg" className="" alt="Image by upklyak on Freepik" />
        <span className="text-slate-700">
          A hero image is an image of a hero. In landscape.
        </span>
      </div>
      <div className="flex mx-auto p-10 items-center justify-around flex-col min-h-96">
        <h3>"You may also like" - simulated user-specific, dynamic list</h3>
        <Suspense fallback={<ListSkeleton />}>
          <YouMayAlsoLikeList />
        </Suspense>
      </div>
      <div className="flex mx-auto p-10 items-center justify-center flex-col">
        <h3>Popular Comedies (static)</h3>
        <ListOfMovies name={"toprated"} url={"discover/movie?with_genres=35"} />
      </div>
      <div className="flex mx-auto p-10 items-center justify-center flex-col">
        <h3>Top Rated (static)</h3>
        <ListOfMovies name={"toprated"} url={"movie/top_rated"} />
      </div>
      <div className="flex mx-auto p-10 items-center justify-around flex-col">
        <h3>Upcoming (static)</h3>
        <ListOfMovies name={"upcoming"} url={"movie/upcoming"} />
      </div>
    </main>
  );
}
