"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function BrandAwareLink({ href, ...props }: Props) {
  const { brand } = useParams();
  const hrefWithBrand = `/${brand}${href.startsWith("/") ? href : `/${href}`}`;
  return <Link href={hrefWithBrand} {...props} />;
}
