import { getTmdbVideoDetails } from "@/server/getTmdbData";
import { Metadata } from "next";
import MovieAssetDetails from "@/components/MovieDetails";

type Props = {
  params: { movieId: string };
};

export default async function MovieDetails({ params }: Props) {
  const { movieId } = params;

  return <MovieAssetDetails movieId={movieId} />;
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
