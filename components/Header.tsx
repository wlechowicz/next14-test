import Link from "next/link";

export default async function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full bg-black text-slate-50 h-[64px] px-12 sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center">
        <div className="text-4xl font-bold">
          <Link href="/">Fooflix</Link>
        </div>
        <div className="hidden sm:flex px-8 gap-6 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
        </div>
      </div>
      <div className="h-full p-4">
        <img
          src="/user-profile.svg"
          alt="User profile icon"
          className="h-full"
        />
      </div>
    </header>
  );
}
