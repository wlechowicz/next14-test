import MovieAssetDetails from "@/components/MovieDetails";
import Modal from "@/components/Modal";

export default function MovieModal({
  params,
}: {
  params: { movieId: string };
}) {
  const { movieId } = params;

  return (
    <Modal>
      <MovieAssetDetails movieId={movieId} />
    </Modal>
  );
}
