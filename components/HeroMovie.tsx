import { getTmdbUpcomingHero } from "@/server/getTmdbData";
import Image from "./ImageTmdb";
import Link from "next/link";

export default async function HeroMovie() {
  const heroMovie = await getTmdbUpcomingHero();

  if (!heroMovie) {
    // TODO: return some default hero
    return null;
  }

  const { id, title, backdrop_path } = heroMovie;

  return (
    <Link
      href={`/movie/${id}`}
      className="flex flex-col items-center w-full relative"
    >
      <Image
        url={backdrop_path}
        className="border-0 rounded w-full"
        alt={`Now playing: ${title}`}
        size="w1280"
      />
      <h1 className="text-5xl text-gray-100 absolute bottom-8 left-24 p-24 [text-shadow:_-3px_4px_2px_var(--tw-shadow-color)] shadow-black">
        {title}
      </h1>
    </Link>
  );
}
