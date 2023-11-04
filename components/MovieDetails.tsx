import Image from "@/components/ImageTmdb";
import Recs from "./Recs";
import { notFound } from "next/navigation";
import { getTmdbVideoDetails } from "@/server/getTmdbData";

// black filled play icon
const PlayIcon = () => (
  <svg
    className="w-6 h-6 relative left-0.5"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default async function MovieDetails({ movieId }: { movieId: string }) {
  const videoData = await getTmdbVideoDetails(movieId);

  if (!videoData) {
    notFound();
  }

  const { id, title, backdrop_path, tagline, overview, release_date } =
    videoData;

  return (
    <div className="max-w-5xl flex flex-col justify-around mx-auto gap-y-4 relative mb-10">
      <Image
        url={backdrop_path}
        alt={title}
        className="border-0 rounded object-fill w-full min-h-[25%]"
        size="w1280"
      />
      <div className="mt-[-8em] pl-8 mb-[4em]">
        <button className="bg-slate-500 hover:bg-slate-400 border-black rounded px-10 py-4 flex flex-row items-center text-xl">
          <span className="bg-slate-50 rounded-full inline-block p-1 text-black mr-2">
            <PlayIcon />
          </span>
          Play
        </button>
      </div>
      <section className="flex flex-col px-4 gap-y-4">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-l italic">{tagline}</p>
        <p className="text-l">{overview}</p>
        <p className="text-sm">Release Date: {release_date}</p>
        <Recs assetType="movie" assetId={id} />
      </section>
    </div>
  );
}
