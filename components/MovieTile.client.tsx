"use client";

import type { Video } from "@/types/Video";
import Image from "./ImageTmdb";
import Link from "next/link";

export const MovieTile = ({
  movie: { id, title, poster_path },
}: {
  movie: Video;
}) => {
  return (
    <Link
      className="bg-inherit focus:ring rounded aspect-[1/1.5]"
      href={`/movie/${id}`}
    >
      <Image
        url={poster_path}
        className="border-0 rounded object-fill"
        alt={title}
        size="w500"
      />
      <span className="sr-only">
        Movie card for: {title} (id: {id})
      </span>
    </Link>
  );
};
