import Header from "@/components/Header";
import { getBrandData, getKnownBrands } from "@/server/brands";
import { notFound } from "next/navigation";

import { type Metadata } from "next";

type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { brand: string };
};

export default function RootLayout({ children, modal, params }: LayoutProps) {
  const { brand } = params;
  const brandData = getBrandData(brand);

  if (!brandData) {
    notFound();
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

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { brand } = params;
  const brandData = getBrandData(brand);

  return {
    title: brandData.name,
    description: brandData.description,
  };
}

export function generateStaticParams() {
  return getKnownBrands().map((brand) => ({ brand }));
}
