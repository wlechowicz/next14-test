import Image from "@/components/ImageTmdb";
import Recs from "./Recs";
import { notFound } from "next/navigation";
import { getTmdbVideoDetails } from "@/server/getTmdbData";

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
