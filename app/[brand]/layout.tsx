import Header from "@/components/Header";
import { getBrandData } from "@/server/brands";

import { type Metadata } from "next";

type Props = {
  params: { brand: string };
};

export default function RootLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { brand: string };
}) {
  const { brand } = params;
  const brandData = getBrandData(brand);

  if (!brandData) {
    throw new Error("Invalid brand");
  }

  return (
    <>
      <Header brand={brandData} />
      {children}
      {modal}
      <footer className="text-center pt-20 pb-2 text-sm font-thin">
        This demo site uses the TMDB API but is not endorsed or certified by
        TMDB.
      </footer>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand } = params;
  const brandData = getBrandData(brand);

  return {
    title: brandData?.name || "Fooflix",
    description: brandData?.description || "Get flixed, foo!",
  };
}
