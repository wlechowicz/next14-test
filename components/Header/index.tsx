import Link from "next/link";
import UserIcon from "./UserIcon";

export default async function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full bg-black text-slate-50 h-[64px] px-12 sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center">
        <div className="text-4xl font-bold">
          <Link href="/">Fooflix</Link>
        </div>
        <div className="hidden sm:flex px-8 gap-6 font-semibold">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/movies">
            Movies
          </Link>
          <Link className="hover:underline" href="/series">
            Series
          </Link>
        </div>
      </div>
      <UserIcon />
    </header>
  );
}