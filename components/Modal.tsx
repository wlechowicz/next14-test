"use client";

import { useClickAway } from "@/hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const card = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.scrollTo(0, 0);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useClickAway(card, () => onDismiss());

  // workwround because modal doesn't close after navigating to a non-intercepted page
  // https://github.com/vercel/next.js/discussions/50284
  const pathname = usePathname();
  console.log("### pathname", pathname);
  if (!pathname.startsWith("/movie/")) {
    return null;
  }

  return (
    <div className="fixed top-[var(--header-height)] left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start">
      <div
        className="flex flex-col rounded p-4 bg-slate-900 bg-opacity-100 overflow-y-scroll"
        ref={card}
      >
        {children}
        <Link href="/shows/1">Shows/1</Link>
      </div>
    </div>
  );
}
