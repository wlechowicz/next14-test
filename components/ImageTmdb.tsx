type TMDBImage = {
  url: string;
  size?: string;
  className?: string;
  alt: string;
};

export default function Image({
  url,
  size = "w500",
  className,
  alt,
}: TMDBImage) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/${size}/${url}`}
      className={className}
      alt={alt}
    />
  );
}
