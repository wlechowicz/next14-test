import { getTmdbUpcomingHero } from "@/server/getTmdbData";
import Image from "./ImageTmdb";
import Link from "@/components/Link";

export default async function HeroMovie() {
  const heroMovie = await getTmdbUpcomingHero();

  if (!heroMovie) {
    // TODO: return some default hero
    return null;
  }

  const { id, title, backdrop_path, release_date } = heroMovie;

  const year = release_date.split("-")[0];

  return (
    <Link
      href={`/movie/${id}`}
      className="flex flex-col items-center w-full relative max-h-[75vh] overflow-hidden"
    >
      <Image
        url={backdrop_path}
        className="border-0 w-full h-auto"
        alt={`Now playing: ${title}`}
        size="w1280"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--background-color-dark)] to-transparent h-[50%]" />
      <div className="absolute bottom-6 left-10 [text-shadow:_-3px_4px_2px_var(--tw-shadow-color)] shadow-black text-gray-100">
        <h1 className="text-[5vw] xl:text-[4vw]">{title}</h1>
        <h2 className="text-[3vw] xl:text-[2vw] text-right">{year}</h2>
      </div>
    </Link>
  );
}
