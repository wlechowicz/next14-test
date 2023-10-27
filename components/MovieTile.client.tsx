"use client";

import type { Data } from "./ListOfMovies";
import Image from "./ImageTmdb";

export const MovieTile = ({
  movie: { title, poster_path },
}: {
  movie: Data;
}) => {
  return (
    <button
      className="p-2 bg-slate-500 hover:bg-slate-400 focus:ring rounded w-[320px] h-[480px]"
      onClick={() => alert(`You clicked a movie called "${title}"`)}
    >
      <Image
        url={poster_path}
        className="border-0 rounded object-fill"
        alt={title}
      />
      <span className="sr-only">Movie card for: {title}</span>
    </button>
  );
};
