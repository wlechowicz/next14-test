"use client";

import type { Video } from "@/types/Video";
import type { Series } from "@/types/Series";
import Image from "@/components/ImageTmdb";
import Link from "@/components/Link";

export const AssetTile = ({
  asset,
  type,
}: {
  asset: Video | Series;
  type: string;
}) => {
  const { id, poster_path } = asset;
  const displayName = "title" in asset ? asset.title : asset.name;

  return (
    <Link
      className="bg-inherit focus:ring rounded aspect-[1/1.5]"
      href={type && id ? `/${type}/${id}` : "#"}
    >
      <Image
        url={poster_path}
        className="border-0 rounded object-fill"
        alt={displayName}
        size="w500"
      />
      <span className="sr-only">Media card for {displayName}</span>
    </Link>
  );
};
