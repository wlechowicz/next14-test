"use client";

import { useClickAway, useFocusTrap } from "@/hooks";
import Link from "@/components/Link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { on } from "events";

export default function Modal({ children }: { children: React.ReactNode }) {
  const card = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const onDismiss = useCallback(() => {
    // FIXME: this should be router.push("/") but that doesn't work
    // also router needs to be made brand-aware like the custom Link
    router.back();
  }, [router]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // store focus of the item that opened the modal
    const modalOpener = document.activeElement as HTMLElement;

    return () => {
      modalOpener?.focus();
    };
  }, []);

  useClickAway(card, () => onDismiss());
  useFocusTrap(card, () => onDismiss());

  return (
    <div
      role="dialog"
      aria-modal
      aria-labelledby="sr-modal-label"
      className="fixed top-0 left-0 w-full h-full pt-[var(--header-height)] bg-black bg-opacity-50 flex justify-center items-start z-40"
    >
      <div
        className="flex flex-col modal-card rounded p-4 bg-slate-900 bg-opacity-100 overflow-y-auto relative"
        ref={card}
      >
        <span className="sr-only" id="sr-modal-label">
          Details and description for the video you selected.
        </span>
        <button
          onClick={onDismiss}
          className="absolute z-50 top-2 right-4 text-4xl px-4 py-2 text-slate-300 hover:text-slate-700 focus:text-slate-700 [text-shadow:_0px_1px_2px_#000]"
        >
          &times;
          <span className="sr-only">Close</span>
        </button>
        {children}
        Clicking this should take you to /shows/1 and close the modal:{" "}
        <Link href="/shows/1" prefetch={false}>
          Shows/1
        </Link>
      </div>
    </div>
  );
}
