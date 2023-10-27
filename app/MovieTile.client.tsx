"use client";

import type { Data } from "./ListOfMovies";
import Image from "./imageTmdb";

export const MovieTile = ({
  movie: { title, poster_path, id },
}: {
  movie: Data;
}) => {
  return (
    <button
      className="flex justify-between flex-col p-2 bg-slate-500 hover:bg-slate-400 focus:ring rounded"
      onClick={() => alert(`You clicked a movie called "${title}"`)}
    >
      <Image
        url={poster_path}
        className="border-0 rounded object-cover min-h-96"
        alt="title"
      />
    </button>
  );
};
