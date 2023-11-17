import { Suspense } from "react";
import DynamicList from "./ListOfAssets/DynamicList";
import ListSkeleton from "./ListOfAssets/ListSkeleton";
import ListTitle from "./ListOfAssets/ListTitle";

export default function Recs({
  assetType,
  assetId,
}: {
  assetType: string;
  assetId: string | number;
}) {
  return (
    <ListTitle title="More Like This">
      <Suspense fallback={<ListSkeleton tiles={8} />}>
        <DynamicList
          url={`/${assetType}/${assetId}/similar`}
          name={`similar${assetType}s`}
          limit={8}
        />
      </Suspense>
    </ListTitle>
  );
}
