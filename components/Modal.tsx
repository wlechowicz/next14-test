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

  // FIXME: this makes the modal call router.back() when anything in the header is clicked
  useClickAway(card, () => onDismiss());

  // workaround because modal doesn't close after navigating to a non-intercepted page
  // https://github.com/vercel/next.js/discussions/50284
  // https://github.com/vercel/next.js/issues/48719
  // const pathname = usePathname();
  // if (!pathname.startsWith("/movie/")) {
  //   return null;
  // }

  return (
    <div className="fixed top-[--header-height] left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start">
      <div
        className="flex flex-col modal-card rounded p-4 bg-slate-900 bg-opacity-100 overflow-y-auto"
        ref={card}
      >
        {children}
        {/* broken, see https://github.com/vercel/next.js/issues/48719 */}
        Clicking this should take you to /shows/1 and close the modal:{" "}
        <Link href="/shows/1">Shows/1</Link>
      </div>
    </div>
  );
}
