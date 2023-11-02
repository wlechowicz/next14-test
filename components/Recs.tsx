import { Suspense } from "react";
import DynamicList from "./DynamicListOfAssets";
import ListSkeleton from "./ListSkeleton";
import ListTitle from "./ListTitle";

export default function Recs({
  assetType,
  assetId,
}: {
  assetType: string;
  assetId: string | number;
}) {
  return (
    <ListTitle title="More Like This">
      <Suspense fallback={<ListSkeleton />}>
        <DynamicList
          url={`/${assetType}/${assetId}/similar`}
          name={`similar${assetType}s`}
          limit={6}
        />
      </Suspense>
    </ListTitle>
  );
}
