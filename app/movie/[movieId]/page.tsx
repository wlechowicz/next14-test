import Image from "@/components/ImageTmdb";
import ListSkeleton from "@/components/ListSkeleton";
import DynamicList from "@/components/DynamicListOfMovies";
import { getTmdbVideoDetails } from "@/server/getTmdbData";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ListTitle from "@/components/ListTitle";

type Props = {
  params: { movieId: string };
};

export default async function AssetDetails({ params }: Props) {
  const { movieId } = params;

  const videoData = await getTmdbVideoDetails(movieId);

  if (!videoData) {
    notFound();
  }

  const { title, backdrop_path, tagline, overview, release_date } = videoData;

  return (
    <div className="max-w-5xl flex flex-col justify-around mx-auto gap-y-4 relative mb-10">
      {/* <Link
        className="text-5xl font-bold absolute top-0 right-0 leading-6 p-2"
        href="/"
        aria-label="Go back to Home"
      >
        &times;
      </Link> */}
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
        <ListTitle title="More Like This">
          <Suspense fallback={<ListSkeleton />}>
            <DynamicList
              url={`/movie/${movieId}/similar`}
              name="similarmovies"
              limit={6}
            />
          </Suspense>
        </ListTitle>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return ["968051", "1139087", "507089"].map((movieId) => ({ movieId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { movieId } = params;
  const videoData = await getTmdbVideoDetails(movieId);

  return {
    title: `Fooflix: ${videoData?.title || "Movie details"}`,
  };
}

export const revalidate = 43200; // 12 hours
