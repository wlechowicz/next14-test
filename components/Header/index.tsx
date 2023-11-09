import { Suspense } from "react";
import Link from "@/components/Link";
import UserIcon from "./UserIcon";
import UserIconSkelly from "./UserIconSkelly";
import { type Brand } from "@/server/brands";

export default async function Header({ brand }: { brand: Brand }) {
  return (
    <header className="flex flex-row items-center justify-between w-full bg-black text-slate-50 h-[--header-height] px-12 sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center">
        {/* FIXME: color from theme doesn't work like this because tailwind doesn't collect this class */}
        <div className={`text-4xl font-bold ${brand.theme.header.logoColor}`}>
          <Link href="/">{brand.name}</Link>
        </div>
        <div className="hidden sm:flex px-8 gap-6 font-semibold">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/movies">
            Movies
          </Link>
          <Link className="hover:underline" href="/shows">
            Shows
          </Link>
        </div>
      </div>
      <Suspense fallback={<UserIconSkelly />}>
        <UserIcon />
      </Suspense>
    </header>
  );
}
