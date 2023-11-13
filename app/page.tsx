import Link from "next/link";

export default function AlmostHome() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <h1 className="text-xl">I need me a brand</h1>
      <ul>
        <li>
          <Link href="/fooflix" prefetch={false}>
            Fooflix
          </Link>
        </li>
        <li>
          <Link href="/barflix" prefetch={false}>
            Barflix
          </Link>
        </li>
      </ul>
    </div>
  );
}
